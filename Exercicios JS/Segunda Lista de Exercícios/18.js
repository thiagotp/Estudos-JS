function despesasTotais(vector) {
    let total = 0
    for (let i = 0; i < vector.length; i++) {
        total += vector[i].preco
    }
    return total
}

let vec = [
    { nome: "Jornal", categoria: "Informação", preco: 39 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 82 }
]


//ex 2

function despesasTotais2(vector) {
    let mapear = vector => vector.preco
    let newArray = vector.map(mapear)
    let resultado = newArray.reduce((atual, corrente) => atual + corrente)
    return resultado
}


//ex 3
function despesasTotais3(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}

//ex 4 
function despesasTotais4(itens) {
    return itens
    .map(item => item.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

//ex 5 
function despesasTotais5(itens) {
    var total = 0
    for (let item of itens)
    total += item.preco
    return total
}

console.log(despesasTotais(vec))
console.log(despesasTotais2(vec))
console.log(despesasTotais3(vec))
console.log(despesasTotais4(vec))
console.log(despesasTotais5(vec))