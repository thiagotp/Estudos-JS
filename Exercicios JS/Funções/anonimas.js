const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(4, 5)
imprimirResultado(4, 5, soma)
imprimirResultado(4, 5, function (x, y) {
    return x - y
})
imprimirResultado(4, 5, (x, y) => x * y)

const pessoa = {
    //falar(){} pode ser também 
    falar: function () {
        console.log("Hello Word!")
    }
}

pessoa.falar()