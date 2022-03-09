function menorNumero(vector) {
    let menor = vector[0]
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] <= menor) {
            menor = vector[i]
        }
    }
    return menor
}


//ex 2

function menorNumero2(numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

//ex 3

function menorNumero3(numeros) {
    return Math.min(...numeros);
}

console.log(menorNumero([13, 42, 32, 12, 5, 3]))
console.log(menorNumero2([13, 42, 32, 12]))
console.log(menorNumero3([13, 42, 32]))
