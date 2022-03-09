function calcularMedia(vec) {
    let result = vec.reduce((acumulador, atual) => acumulador + atual)
    return result / vec.length
}

let vector = [0, 10]
console.log(calcularMedia(vector))

//ex 2 
function calcularMedia2(numeros) {
    const quantidadeDeNumeros = numeros.length
    let somaTotal = 0
    for (numero of numeros) {
        somaTotal += numero
    }
    return somaTotal / quantidadeDeNumeros
}

console.log(calcularMedia2(vector))