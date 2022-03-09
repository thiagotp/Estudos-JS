function soma() {
    let soma = 0
    //arguments é um array interno que contém todos os itens passados
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
//Usando o arguments para recuperar o argumento 
console.log(soma(8, 3, 4, 5))
console.log(soma(8, 3, 4, 5, " ", "Irá Concatenar"))
//Como o zero já foi iniciado no let ele irá aparecer na resposta
console.log(soma(" ", "Irá Concatenar"))
