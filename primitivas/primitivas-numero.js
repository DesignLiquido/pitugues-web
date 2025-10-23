"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.primitivasNumero = void 0;
const primitivas_numero_1 = __importDefault(require("@designliquido/delegua/bibliotecas/primitivas-numero"));
exports.primitivasNumero = [];
for (const [nomePrimitiva, conteudo] of Object.entries(primitivas_numero_1.default)) {
    exports.primitivasNumero.push({
        nome: nomePrimitiva,
        documentacao: String(conteudo.documentacao),
        exemploCodigo: String(conteudo.exemploCodigo),
        assinaturas: [
            conteudo.assinaturaFormato
        ]
    });
}
