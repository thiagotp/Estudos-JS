//Object.preventExtension -> faz com que seu objeto não adicionar novos atributos
const produto = Object.preventExtensions({
    nome:"Qualquer",
    preco: 1.99,
    tag: "promocao"
})

console.log("Extensivel: ", Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolhar"
delete produto.tag
console.log(produto)

//Object.seal -> permite que você apenas modifique o valores de um objeto. Não pode adicionar nem remover atributos

const pessoa = {nome: 'Thiago', idade: 28}
Object.seal(pessoa)
console.log("Selado: ", Object.isSealed(pessoa))

pessoa.sobrenome = "Silva"
delete pessoa.nome
pessoa.idade = 30
console.log(pessoa)