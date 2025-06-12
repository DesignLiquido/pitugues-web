const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const { LexadorPitugues, AvaliadorSintaticoPitugues, Interpretador} = require('@designliquido/delegua-node')
const { LexadorPitugues, AvaliadorSintaticoPitugues, Interpretador } = require('@designliquido/delegua');

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
    const lexador = new LexadorPitugues();
    const avaliador = new AvaliadorSintaticoPitugues();
    const interpretador = new Interpretador(process.cwd(), false, funcaoSaida, funcaoSaida);

    const retornoLexador = lexador.mapear(codigo);
    const retornoAvaliadorSinatico = avaliador.analisar(retornoLexador, -1);
    const retorno = await interpretador.interpretar(retornoAvaliadorSinatico.declaracoes);

    console.log('[✅ Retorno completo]');
    console.dir(retorno, { depth: null });

    const saida =
      retorno.resultado ??
      retorno.retorno ??
      retorno.saida ??
      JSON.stringify(retorno, null, 2);

    res.json({ saida });
  } catch (err) {
    console.error('[ Erro ao interpretar]:', err);
    res.status(500).json({ erro: err.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
