export const LANGUAGE_VERSION = {
    pitugues: "",
}

export const CODE_SNIPPETS = {
    pitugues: `escreva("Olá, Design Líquido!")\n`
};

export const KEYWORDS_DOCS_LIST = [
    {
        nome: 'adicionar',
        assinaturas: [
            {
                formato: 'adicionar()',
                parametros: []
            }
        ],
        documentacao: 'Adiciona um novo item ao vetor.',
        exemploCodigo: 'var v = []' +
        '\nv.adicionar(valor_a_adicionar)'
    }, 
    {
        nome: 'arredondarParaCima',
        assinaturas: [
            {
                formato: 'arredondarParaCima()',
                parametros: []
            }
        ],
        documentacao: 'Arredonda valor numérico para cima.',
        exemploCodigo: 'valor.arredondarParaCima()'
    },
    {
        nome: 'escreva',
        assinaturas: [
            {
                formato: 'escreva()',
                parametros: []
            }
        ],
        documentacao: 'Método que retorna um valor textual.' ,
        exemploCodigo: 'escreva(\'Olá, mundo\')'
    },
    {
        nome: 'leia',
        assinaturas: [
            {
                formato: 'leia()',
                parametros: []
            }
        ],
        documentacao: 'Função de entrada para atribuição de valores textuais.',
        exemploCodigo: 'var entrada = leia(\'Informe entrada\': )'
    },
    {
        nome: 'aparar',
        assinaturas: [
            {
                formato: 'aparar()',
                parametros: []
            }
        ],
        documentacao: 'Método textual que apara as extremidades de um texto.',
        exemploCodigo: 'var t = "   meu texto com espaços no início e no fim       "' +
            '\nt.aparar()'
    },
    {
        nome: 'apararFim',
        assinaturas: [
            {
                formato: 'apararFim()',
                parametros: []
            }
        ],
        documentacao: 'Método textual que apara o final de um texto.',
        exemploCodigo: 'var t = "   meu texto com espaços no início e no fim       "' +
            '\nt.apararFim()'
    },
    {
        nome: 'apararInicio',
        assinaturas: [
            {
                formato: 'apararInicio()',
                parametros: []
            }
        ],
        documentacao: 'Método textual que apara o início de um texto.',
        exemploCodigo: 'var t = "   meu texto com espaços no início e no fim       "' +
            '\nt.apararInicio()'
    },
    {
        nome: 'concatenar',
        assinaturas: [
            {
                formato: 'concatenar()',
                parametros: []
            }
        ],
        documentacao: 'Concatenação de elementos textuais.',
        exemploCodigo: 'var t1 = "um"' +
            '\nvar t2 = "dois três"' +
            '\nt1.concatecar(t2)'
    },
    {
        nome: 'dividir',
        assinaturas: [
            {
                formato: 'dividir()',
                parametros: []
            }
        ],
        documentacao: 'Gera vetor a partir de valores textuais a partir de um separador idicado nos parâmetros da função.',
        exemploCodigo: 'var t = "um dois três"' +
            '\nt.dividir(\' \')'
    },
    {
        nome: 'fatiar',
        assinaturas: [
            {
                formato: 'fatiar()',
                parametros: []
            }
        ],
        documentacao: 'Retorna os valores de um texto de acordo com as posições indicadas em parâmetros.',
        exemploCodigo: 'var t = "Um dois três quatro"' +
            '\nt.fatiar(8, 12)'
    },
    {
        nome: 'inclui',
        assinaturas: [
            {
                formato: 'inclui()',
                parametros: []
            }
        ],
        documentacao: 'Verifica e retorna \'verdadeiro\' ou \'falso\' se o valor indicado nos parâmtros está presente no texto.',
        exemploCodigo: 'var t = "Um dois três quatro"' +
            '\nt.inclui("quatro")'
    },
    {
        nome: 'maiusculo',
        assinaturas: [
            {
                formato: 'maiusculo()',
                parametros: []
            }
        ],
        documentacao: 'Converte todos os caracteres de um texto para maiúsculo.',
        exemploCodigo: 'var t = "tudo em minúsculo"' +
            '\nt.maiusculo()'
    },
    {
        nome: 'minusculo',
        assinaturas: [
            {
                formato: 'minusculo()',
                parametros: []
            }
        ],
        documentacao: 'Converte todos os caracteres de um texto para minúsculo.',
        exemploCodigo: 'var t = "TUDO EM MAIÚSCULO"' +
            '\nt.minusculo()' 
    },
    {
        nome: 'substituir',
        assinaturas: [
            {
                formato: 'substituir()',
                parametros: []
            }
        ],
        documentacao: 'Substitui valores textuais indicados por parâmetros, sendo o primeiro o valor a ser substituído e o segundo o valor substituto.',
        exemploCodigo: 'var t = "Eu gosto de caju"' +
            '\nt.substituir("caju", "graviola")'
    },
    {
        nome: 'subtexto',
        assinaturas: [
            {
                formato: 'subtexto()',
                parametros: []
            }
        ],
        documentacao: 'Extrai o texto entre as posições indicadas nos parâmetros.',
        exemploCodigo: 'var t = "Eu gosto de caju e de graviola"' +
            '\nt.subtexto(3, 16)'
    },
    {
        nome: 'arredondarParaBaixo',
        assinaturas: [
            {
                formato: 'arredondarParaBaixo()',
                parametros: []
            }
        ],
        documentacao: 'Arredonda valor numérico para baixo.',
        exemploCodigo: 'var valor = 5.7' +
            '\nvalor.arredondarParaBaixo()'   
    },
    {
        nome: 'empilhar',
        assinaturas: [
            {
                formato: 'empilhar()',
                parametros: []
            }
        ],
        documentacao: 'Adiciona valores a um vetor seguindo a estrutura de pilha.',
        exemploCodigo: 'var v = []' +
            '\nv.empilhar(7)'
    },
    {
        nome: 'inverter',
        assinaturas: [
            {
                formato: 'inverter()',
                parametros: []
            }
        ],
        documentacao: 'Retorna valores invertidos de um vetor.',
        exemploCodigo: 'var v = [1, 2, 3]' +
            '\nv.inverter()'
    },
    {
        nome: 'juntar',
        assinaturas: [
            {
                formato: 'juntar()',
                parametros: []
            }
        ],
        documentacao: 'União de valores a partir de um separador indicado.',
        exemploCodigo: 'var v = [1, 2, 3]' +
            '\nv.juntar(\':\')'
    },
    {
        nome: 'ordenar',
        assinaturas: [
            {
                formato: 'ordenar()',
                parametros: []
            }
        ],
        documentacao: 'Ordena valores de um array pelo padrão crescente e/ou alfabética.',
        exemploCodigo: 'var v = [4, 2, 12, 5]' +
            '\nv.odernar()'
    },
    {
        nome: 'remover',
        assinaturas: [
            {
                formato: 'remover(elemento)',
                parametros: []
            }
        ],
        documentacao: 'Remove o elemento indicado nos argumentos.',
        exemploCodigo: 'var vetor = [1, 2, 3]' +
            '\nvetor.remover(2)'
    },
    {
        nome: 'removerPrimeiro',
        assinaturas: [
            {
                formato: 'removerPrimeiro()',
                parametros: []
            }
        ],
        documentacao: 'Remove o primeiro elemento de um vetor.',
        exemploCodigo: 'var vetor = [1, 2, 3]' +
            '\nvetor.removerPrimeiro()'
    },
    {
        nome: 'removerUltimo',
        assinaturas: [
            {
                formato: 'removerUltimo()',
                parametros: []
            }
        ],
        documentacao: 'Remove o último elemento de um vetor.',
        exemploCodigo: 'var vetor = [1, 2, 3]' +
            '\nvetor.removerUltimo()'
    },
    {
        nome: 'somar',
        assinaturas: [
            {
                formato: 'somar()',
                parametros: []
            }
        ],
        documentacao: 'Soma os valores de um vetor numérico.',
        exemploCodigo: 'var vetor = [1, 2, 3]' +
            '\nvetor.somar()'
    },
    {
        nome: 'tamanho',
        assinaturas: [
            {
                formato: 'tamanho(elemento)',
                parametros: []
            }
        ],
        documentacao: 'Retorna o tamanho de um vetor ou texto.',
        exemploCodigo: 'tamanho(vetor)'
    },
    {
        nome: 'aleatorio',
        assinaturas: [
            {
                formato: 'aleatorio()',
                parametros: []
            }
        ],
        documentacao: 'Função que gera e retorna um valor numérico aleatório.',
        exemploCodigo: 'var numero_aleatorio = aleatorio()'
    },
    {
        nome: 'aleatorioEntre',
        assinaturas: [
            {
                formato: 'aleatorioEntre(elemento1, elemento2)',
                parametros: []
            }
        ],
        documentacao: 'Retorna um valor numérico aleatório entre dois valores indicados nos argumentos.',
        exemploCodigo: 'var numero_aleatorio = aleatorioEntre(1, 9)'
    },
    {
        nome: 'inteiro',
        assinaturas: [
            {
                formato: 'inteiro(elemento)',
                parametros: []
            }
        ],
        documentacao: 'Converte valores textuais e númericos reais para um valor númerico do tipo inteiro.',
        exemploCodigo: 'var texto_para_inteiro = "111"' +
            '\nescreva(111 + inteiro(texto_para_inteiro))'
    },
    {
        nome: 'numero',
        assinaturas: [
            {
                formato: 'numero(elemento)',
                parametros: []
            }
        ],
        documentacao: 'Converte valores textuais para tipo número.',
        exemploCodigo: 'var texto_para_numero = "111"' +
            '\nescreva(111 + numero(texto_para_numero))'
    },
    {
        nome: 'número',
        assinaturas: [
            {
                formato: 'número(elemento)',
                parametros: []
            }
        ],
        documentacao: 'Converte valores textuais para tipo número.',
        exemploCodigo: 'var texto_para_numero = "111"' +
            '\nescreva(111 + número(texto_para_numero))'
    },
    {
        nome: 'real',
        assinaturas: [
            {
                formato: 'real(elemento)',
                parametros: []
            }
        ],
        documentacao: 'Converte valores textuais e númericos inteiros para um valor númerico do tipo real.',
        exemploCodigo: 'var texto_para_numero_flutuante = "504.69"' +
            '\nescreva(0.01 + real(texto_para_numero_flutuante))'
    },
    {
        nome: 'texto',
        assinaturas: [
            {
                formato: 'texto(elemento)',
                parametros: []
            }
        ],
        documentacao: 'Converte valores para tipo texto.',
        exemploCodigo: 'var numero_para_texto = 10' +
            '\nescreva(10 + texto(numero_para_texto)) '
    },
]