//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = "cadeira"
produto['marca do produto'] = "Generica"
produto.preco =220
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario:{
        nome: "Jonas",
        idade: 50,
        endereco: {
            rua: "caminho",
            numero: 123
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 35
    },{
        nome: "Thiago",
        idade: 28
    }],
    calcularValor: function(){
        //..
    }
}
console.log(carro)

carro.proprietario.endereco.numero = 300
carro['proprietario']['endereco']['rua'] = "av"
console.log(carro)