function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome:"Notebook",
    preco: 4655,
    desc: 0.15,
    getPreco
}

//Nesse contexto o getPreco retorn NaN porque ele está pegando os valores do "this" no contexto global
console.log(getPreco())


//Nesse contexto ele já pega o this do objeto que o chamou
console.log(produto.getPreco())

const carro = {preco: 49898, desc: 0.20}
//Usando o call e apply para chamar a função
//O que muda nessas funções e a passagem de parâmetro
console.log(getPreco.call(carro, 0.14, "US"))
console.log(getPreco.apply(carro, [0.14, "$"]))