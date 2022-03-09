function inverter(obj) {
    const result = {}
    Object.entries(obj).forEach(valor => {
        const chave = 0
        const val = 1
        result[valor[val]] = valor[chave]
    })
    return result
}

const invertido = { a: 1, b: 2, c: 3 }
console.log(inverter(invertido))

//ex 2

function inverter2(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map(parChaveValor => parChaveValor.reverse())
    return Object.fromEntries(paresDeChaveValorInvertidos)
}
console.log(inverter2(invertido))