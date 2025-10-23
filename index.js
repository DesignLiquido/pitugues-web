"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PituguesWeb = void 0;
const lexador_1 = require("@designliquido/delegua/lexador");
const avaliador_sintatico_1 = require("@designliquido/delegua/avaliador-sintatico");
const analisador_semantico_1 = require("@designliquido/delegua/analisador-semantico");
const estruturas_1 = require("@designliquido/delegua/interpretador/estruturas");
const tradutores_1 = require("@designliquido/delegua/tradutores");
const informacao_elemento_sintatico_1 = require("@designliquido/delegua/informacao-elemento-sintatico");
const estatistica = __importStar(require("@designliquido/delegua-estatistica"));
const fisica = __importStar(require("@designliquido/delegua-fisica"));
const matematica = __importStar(require("@designliquido/delegua-matematica"));
const tempo = __importStar(require("@designliquido/delegua-tempo"));
const objeto_data_1 = require("@designliquido/delegua-tempo/objeto-data");
const json = __importStar(require("./bibliotecas/delegua-json"));
const pitugues_1 = __importDefault(require("@designliquido/delegua/tipos-de-simbolos/pitugues"));
const interpretador_web_1 = require("./interpretador-web");
class PituguesWeb {
    constructor(nomeArquivo, funcaoDeRetorno = null) {
        this.teveErro = false;
        this.teveErroEmTempoDeExecucao = false;
        this.dialeto = "pitugues";
        this.tradutorJavascript = new tradutores_1.TradutorJavaScript();
        this.tradutorPython = new tradutores_1.TradutorPython();
        this.tradutorAssemblyScript = new tradutores_1.TradutorAssemblyScript();
        this.nomeArquivo = nomeArquivo;
        this.funcaoDeRetorno = funcaoDeRetorno || console.log;
        this.lexador = new lexador_1.LexadorPitugues();
        this.avaliadorSintatico = new avaliador_sintatico_1.AvaliadorSintaticoPitugues();
        this.analisadorSemantico = new analisador_semantico_1.AnalisadorSemantico();
        this.interpretador = new interpretador_web_1.InterpretadorWeb("", false, this.funcaoDeRetorno, this.funcaoDeRetorno);
        this.interpretador.interfaceEntradaSaida = {
            question: (mensagem, callback) => {
                const resposta = window.prompt(mensagem);
                callback(resposta);
            }
        };
        this.registrarModuloComPrimitivas("estatistica", estatistica);
        this.registrarModuloComPrimitivas("fisica", fisica);
        this.registrarModuloComPrimitivas("json", json);
        this.registrarModuloComPrimitivas("matematica", matematica);
        this.registrarModuloComPrimitivas("tempo", tempo, { 'ObjetoData': objeto_data_1.ObjetoData });
    }
    registrarModuloComPrimitivas(nomeModulo, ...modulosNode) {
        const modulo = new estruturas_1.DeleguaModulo(nomeModulo);
        // TODO: Pensar numa forma de exportar sem precisar fazer isso.
        const moduloResolvido = this.montarModulo(modulo, ...modulosNode);
        this.interpretador.pilhaEscoposExecucao.definirVariavel(nomeModulo, moduloResolvido);
        this.avaliadorSintatico.tiposDefinidosEmCodigo[nomeModulo] = 'módulo';
        const primitivasConhecidas = this.avaliadorSintatico.primitivasConhecidas;
        primitivasConhecidas[nomeModulo] = {};
        for (const nomeComponente in moduloResolvido.componentes) {
            // TODO: Pensar em como fazer a tipagem.
            primitivasConhecidas[nomeModulo][nomeComponente] = new informacao_elemento_sintatico_1.InformacaoElementoSintatico(nomeComponente, 'qualquer', true, []);
        }
    }
    montarModulo(moduloDelegua, ...modulosNode) {
        for (const moduloNode of modulosNode) {
            const chaves = Object.keys(moduloNode);
            for (let i = 0; i < chaves.length; i++) {
                const funcao = moduloNode[chaves[i]];
                moduloDelegua.componentes[chaves[i]] = new estruturas_1.FuncaoPadrao(funcao.length, funcao);
            }
        }
        return moduloDelegua;
    }
    executar(retornoImportador_1) {
        return __awaiter(this, arguments, void 0, function* (retornoImportador, manterAmbiente = false) {
            if (retornoImportador.retornoLexador.erros.length > 0) {
                for (const erroLexador of retornoImportador.retornoLexador.erros) {
                    this.reportar(erroLexador.linha, ` no '${erroLexador.caractere}'`, erroLexador.mensagem);
                }
                return;
            }
            if (retornoImportador.retornoAvaliadorSintatico.erros.length > 0) {
                for (const erroAvaliadorSintatico of retornoImportador
                    .retornoAvaliadorSintatico.erros) {
                    this.erro(erroAvaliadorSintatico.simbolo, erroAvaliadorSintatico.message);
                }
                return;
            }
            const retornoInterpretador = yield this.interpretador.interpretar(retornoImportador.retornoAvaliadorSintatico.declaracoes, manterAmbiente);
            if (retornoInterpretador.erros.length > 0) {
                for (const erroInterpretador of retornoInterpretador.erros) {
                    if (erroInterpretador.simbolo) {
                        this.erroEmTempoDeExecucao(erroInterpretador.simbolo);
                    }
                    else {
                        const erroEmJavaScript = erroInterpretador;
                        console.error(`Erro em JavaScript: ` + `${erroEmJavaScript.message}`);
                        console.error(`Pilha de execução: ` + `${erroEmJavaScript.stack}`);
                    }
                }
            }
            return {
                erros: retornoInterpretador.erros,
                resultado: retornoInterpretador.resultado,
            };
        });
    }
    versao() {
        return "0.54 (web)";
    }
    reportar(linha, onde, mensagem) {
        if (this.nomeArquivo)
            console.error(`[Arquivo: ${this.nomeArquivo}] [Linha: ${linha}]` +
                ` Erro${onde}: ${mensagem}`);
        else
            console.error(`[Linha: ${linha}]` + ` Erro${onde}: ${mensagem}`);
        this.teveErro = true;
    }
    erro(simbolo, mensagemDeErro) {
        const _simbolo = simbolo || { tipo: pitugues_1.default.EOF, linha: -1, lexema: '(indefinido)' };
        if (_simbolo.tipo === pitugues_1.default.EOF) {
            this.reportar(Number(_simbolo.linha), ' no final do código', mensagemDeErro);
        }
        else {
            this.reportar(Number(_simbolo.linha), ` no '${_simbolo.lexema}'`, mensagemDeErro);
        }
    }
    erroEmTempoDeExecucao(erro) {
        var _a;
        const linha = ((_a = erro === null || erro === void 0 ? void 0 : erro.simbolo) === null || _a === void 0 ? void 0 : _a.linha) || (erro === null || erro === void 0 ? void 0 : erro.linha);
        const mensagem = (erro === null || erro === void 0 ? void 0 : erro.mensagem) || (erro === null || erro === void 0 ? void 0 : erro.message);
        console.error(`Erro: [Linha: ${linha}]` + ` ${mensagem}`);
    }
}
exports.PituguesWeb = PituguesWeb;
