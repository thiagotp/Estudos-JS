//Filter -> irá filtrar um array por meio de uma condição

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true},
    { nome: "iPad Pro", preco: 4825, fragil: false},
    { nome: "Copo de Vidro", preco: 12.31, fragil: true},
    { nome: "Copo de Plástico", preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2000
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))