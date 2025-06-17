import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { LexadorPitugues } from "@designliquido/delegua/lexador/dialetos/lexador-pitugues.js";
import { AvaliadorSintaticoPitugues } from "@designliquido/delegua/avaliador-sintatico/dialetos/avaliador-sintatico-pitugues.js";
import { Interpretador } from "@designliquido/delegua/interpretador/interpretador.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/executar', async (req, res) => {
  const { codigo } = req.body;

  console.log('[⚡ Código recebido no backend]');
  console.log(codigo);
  console.log('-------------------------------------');

  try {
    let saidas = [];

    const funcaoSaida = (texto) => {
      saidas.push(texto);
    } 

    const lexador = new LexadorPitugues();
    const avaliador = new AvaliadorSintaticoPitugues();
    const interpretador = new Interpretador(process.cwd(), false, funcaoSaida, funcaoSaida);

    const retornoLexador = lexador.mapear([codigo]);
    const retornoAvaliadorSinatico = avaliador.analisar(retornoLexador, -1);
    const retorno = await interpretador.interpretar(retornoAvaliadorSinatico.declaracoes);

    console.log('[✅ Retorno completo]');
    console.dir(retorno, { depth: null });

    res.json({ saida: saidas, retorno: retorno });
  } catch (err) {
    console.error('[ Erro ao interpretar]:', err);
    res.status(500).json({ erro: err.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
