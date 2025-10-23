# Página Web com Interpretador Pituguês

Baseada em [`delegua-web`](https://designliquido.github.io/delegua-web), da linguagem Delégua.

Versão funcional publicada em https://designliquido.github.io/pitugues-web/

## Executando localmente

Para executar no seu computador, instale o [Node.js](https://nodejs.org/pt/download) versão LTS. 

Usamos o [yarn](https://yarnpkg.com/) como gerenciador de pacotes. Para restaurar pacotes, use o comando `yarn`. 

O comando que faz tudo é o `yarn testar`. Após pronto, seu navegador padrão abrirá com `pitugues-web` executando.

## Notas sobre geração dos scripts

`index.ts` e tudo dentro de `primitivas/` passam pelo Browserify, que geram scripts compatíveis com navegadores muito antigos, que não suportam módulos.

## Quem já Contribuiu

<a href="https://github.com/DesignLiquido/pitugues-web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DesignLiquido/pitugues-web" />
</a>
