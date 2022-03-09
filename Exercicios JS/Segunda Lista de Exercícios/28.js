function filtrarPorQuantidadeDeDigitos(vector, param) {
    const vec = []
    vector.forEach(valor => {
        if (String(valor).length == param) {
            vec.push(valor)
        }
    })
    return vec
}

//ex 2 

function filtrarPorQuantidadeDeDigitos2(numeros, quantidadeDesejada) {
    return numeros.filter(numero => {
        const quantidadeDeDigitos = String(numero).length
        return quantidadeDeDigitos === quantidadeDesejada
    })
}



console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)) // retornará [38, 10, 11]
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)) // retornará [5, 9, 1]
console.log(filtrarPorQuantidadeDeDigitos2([38, 2, 365, 10, 125, 11], 2)) // retornará [38, 10, 11]
console.log(filtrarPorQuantidadeDeDigitos2([5, 9, 1, 125, 11], 1)) // retornará [5, 9, 1]