//armazenando função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma funcao arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 8))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(4, 9))