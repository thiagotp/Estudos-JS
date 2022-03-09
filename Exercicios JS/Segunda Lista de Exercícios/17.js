function soma(vector) {
    const numeros = vector.length
    return (numeros === 0) ? 0 : vector[0] + soma(vector.slice(1))
}

let vec = [2, 2, 2]
console.log(soma(vec))

//ex 2
function soma2(vector) {
    let soma = 0
    vector.forEach(numero => soma += numero)
    return soma
}

let vec2 = [2, 2, 3]
console.log(soma2(vec2))

//ex 3 
function soma3(vector) {
    let soma = vector.reduce((acumulador, atual) => acumulador + atual, 0)
    return soma
}

let vec3 = [3,3,3]
console.log(soma3(vec3))