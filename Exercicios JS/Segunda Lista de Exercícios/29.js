function segundoMaior(numeros) {
    let indiceDoMaior = 0
    let segundoMaior
    numeros.forEach((numero, indice) => {
        if (numero > numeros[indiceDoMaior])
            indiceDoMaior = indice
    })
    numeros.splice(indiceDoMaior, 1)
    segundoMaior = numeros[0]
    numeros.forEach(numero => {
        if (numero > segundoMaior)
            segundoMaior = numero
    })
    return segundoMaior
}

//ex 2 
function segundoMaior2(numeros) {
    const maiorNumero = Math.max(...numeros)
    //Essa função filtra os números do array que são diferentes do "maiorNumero"
    numeros = numeros.filter(numero => numero != maiorNumero)
    //com o array resultante pegamos de novo o maior número que consequentemente será o segundo maior do array completo
    const segundoMaior = Math.max(...numeros)
    return segundoMaior
}

//ex 3

//Essa função ordena os elementos de forma decrescente e no final pegamos o segundo elemento do array
function segundoMaior3(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]
    return segundoMaior
}


console.log(segundoMaior([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior([8, 4, 5, 6])) // retornará 6
console.log(segundoMaior2([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior2([8, 4, 5, 6])) // retornará 6
console.log(segundoMaior3([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior3([8, 4, 5, 6])) // retornará 6
