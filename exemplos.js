window.Exemplos = {
    OlaMundo: `escreva("Olá, mundo!")`,
    OperacoesBasicas: `
a = 10
b = 4

escreva("Valor de A: " + texto(a))
escreva("Valor de B: " + texto(b))

soma = a + b     # Soma os dois valores
sub  = a - b     # Subtrai os dois valores
mult = a * b     # Multiplica os dois valores
div  = a / b     # Divide os dois valores

escreva("A soma dos números é igual a: " + texto(soma))
escreva("A subtração dos números é igual a: " + texto(sub))
escreva("A multiplicação dos números é igual a: " + texto(mult))
escreva("A divisão dos números é igual a: " + texto(div))
`,
    Condicional: `
letra = leia("Digite uma letra:")

# É necessário verificar letras minúsculas e maiúsculas
se (
    letra == "A" ou letra == "E" ou letra == "I" ou letra == "O" ou letra == "U" ou
    letra == "a" ou letra == "e" ou letra == "i" ou letra == "o" ou letra == "u"
):
    escreva("A letra " + letra + " é uma vogal!")
senão:
    escreva("A letra " + letra + " não é uma vogal!")
`,
    Classe: `
classe Animal:
    funcao correr():
        escreva("Correndo Loucamente")

classe Cachorro(Animal):
    funcao latir():
        escreva("Au Au Au Au")

nomeDoCachorro = Cachorro()
nomeDoCachorro.correr()
nomeDoCachorro.latir()
`,
    MergeSort: `
vetor1 = [8, 2, 9, 5]
a = 0
aux = 0
i = 0

imprima(f"Vetor: Posição[0]: {vetor1[0]}")
imprima(f"Vetor: Posição[1]: {vetor1[1]}")
imprima(f"Vetor: Posição[2]: {vetor1[2]}")
imprima(f"Vetor: Posição[3]: {vetor1[3]}")

i = 0
enquanto i < 3:
    se vetor1[i] > vetor1[i+1]:
        imprima(f"Vetor {i}")
        aux = vetor1[i]
        vetor1[i] = vetor1[i+1]
        vetor1[i+1] = aux
        imprima(vetor1[i])
        imprima(vetor1[i+1])
    i = i + 1

vetor2 = [vetor1[0], vetor1[1]]
vetor3 = [vetor1[2], vetor1[3]]
vetor4 = []

a = 0
enquanto a < 4:
    imprima(f"vetor1({a}): {vetor1[a]}")
    a = a + 1

a = 0
enquanto a < 2:
    imprima(f"vetor2({a}): {vetor2[a]}")
    a = a + 1

a = 0
enquanto a < 2:
    imprima(f"vetor3({a}): {vetor3[a]}")
    a = a + 1

se vetor2[0] < vetor3[0] e vetor2[1] < vetor3[1]:
    vetor4[0] = vetor2[0]
    se vetor3[0] < vetor2[1]:
        vetor4[1] = vetor3[0]
        vetor4[2] = vetor2[1]
        vetor4[3] = vetor3[1]
    senão:
        vetor4[1] = vetor2[1]
        vetor4[2] = vetor3[0]
        vetor4[3] = vetor3[1]

a = 0
enquanto a < 4:
    imprima(f"vetor4({a}): {vetor4[a]}")
    a = a + 1
`,
    Bhaskara: `
funcao bhaskara(a,b,c):
    # A variável "d" vai simbolizar o Delta.
    # "a", "b", e "c" irão representar os coeficientes da equação.
    d = b ** 2
    f = 4 * a * c 

    d = d - f

    imprima(f"O valor de Delta é: {d}")

    d = d ** 0.5

    # Encontrando os valores de X1 e X2.
    x1 = -b + d
    x1 = x1 / 2 * a
    imprima(f"O valor de X1 é: {x1}")

    x2 = -b-d
    x2 = x2 / 2 * a
    imprima(f"O valor de X2 é: {x2}")

    # Resultado das substituições de X por X1 e X2 na equação.
    r1 = x1 ** 2
    r1 = a * r1
    r1 = b * x1 + r1
    r1 = r1 + c
    imprima(f"Substituindo X1 na equação obtém-se: {r1}")

    r2 = x2 ** 2
    r2 = a * r2
    r2 = b * x2 + r2
    r2 = r2 + c
    imprima(f"Substituindo X2 na equação obtém-se: {r2}")

# Insira o valor do coeficiente A:
a = 1
# Insira o valor do coeficiente B:
b = -1
# Insira o valor do coeficiente C:
c = -30
bhaskara(a,b,c)
`,
    Fibonacci: `
# Recursão para o cálculo da sequência de Fibonacci
funcao fibonacci(n):
    se n == 0:
        retorna(0)
    se n == 1:
        retorna(1)

    n1 = n-1
    n2 = n-2
    f1 = fibonacci(n1)
    f2 = fibonacci(n2)

    retorna(f1 + f2)

a = fibonacci(0)
imprima(a)
a = fibonacci(1)
imprima(a)
a = fibonacci(2)
imprima(a)
a = fibonacci(3)
imprima(a)
a = fibonacci(4)
imprima(a)
a = fibonacci(5)
imprima(a)
`,
    Perceptron: `
pesoInicial1 = 0.3
pesoInicial2 = 0.4
entrada1 = 1
entrada2 = 1
erro = 1
resultadoEsperado = nulo

enquanto erro != 0:
    se entrada1 == 1:
        se entrada2 == 1:
            resultadoEsperado = 1
        senão:
            resultadoEsperado = 0

    somatoria = pesoInicial1 * entrada1
    somatoria = pesoInicial2 * entrada2 + somatoria

    resultado = nulo

    se somatoria < 1:
        resultado = 0
    senão:
        se somatoria >= 1:
            resultado = 1

    imprima(f"resultado: {resultado}")

    erro = resultadoEsperado - resultado
    imprima(f"p1: {pesoInicial1}")
    imprima(f"p2: {pesoInicial2}")
    pesoInicial1 = 0.1 * entrada1 * erro + pesoInicial1
    pesoInicial2 = 0.1 * entrada2 * erro + pesoInicial2
    imprima(f"erro: {erro}")
`,
    FilaEstatica: `
maximoDeElementos = 4
indexInicial = 0
indexFinal = 0

# Variavel de controle em iterações
i = 0
filaEstatica = []

funcao enfileirar (valorEntrada):
    se indexFinal == maximoDeElementos:
        imprima("Fila Cheia")
    senao:
        filaEstatica[indexFinal] = valorEntrada
        imprima(f"Valor inserido com sucesso: {filaEstatica[indexFinal]}")
        indexFinal = indexFinal + 1

função desenfileirar():
    i = 0
    se indexInicial == indexFinal:
        imprima("Fila Vazia")
    senao:
        enquanto i <= indexFinal:
            se i + 1 == indexFinal:
                indexFinal = indexFinal - 1
                imprima("Valor retirado com sucesso.")
            senao:
                filaEstatica[i] = filaEstatica[i+1]
            i = i + 1

função mostrar_fila():
    i = 0
    se indexInicial == indexFinal:
        imprima("Fila Vazia")
    senao:
        enquanto i < indexFinal:
            imprima(f"index {i}") 
            imprima(filaEstatica[i])
            i = i + 1

# Demonstração de uso das funções:
mostrar_fila()
valorEntrada = 2
enfileirar(valorEntrada)
valorEntrada = 8
enfileirar(valorEntrada)
valorEntrada = 23
enfileirar(valorEntrada)
valorEntrada = 7
enfileirar(valorEntrada)
mostrar_fila()
desenfileirar()
mostrar_fila()
valorEntrada = 24
enfileirar(valorEntrada)
mostrar_fila()
`,
};
