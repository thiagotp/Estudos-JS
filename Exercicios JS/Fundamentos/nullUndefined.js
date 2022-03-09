const a = {
    name: "teste"
}
//a constante 'a' não tem o objeto em si e sim o endereço de onde o objeto está alocado
console.log(a)

//Aqui a gente transfere para b o endereço na memória que o objeto da constante 'a' foi criado
const b = a
b.name = "fieja"
console.log(b)
console.log(a)
//Percebam que mesmo mudando só em 'b' o nome também mudou em 'a' porque ambos apontam para o mesmo endereço
//Isso é uma atribuição por referência

let c = 3 
let d = c 
d++
console.log(c)
console.log(d)
//Como 3 é um tipo primitivo, não é o endereço que é copiado e sim o valor

//=======================================================
let valor //nao iniciada
console.log(valor)
valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString())//Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Nao aplicar dessa forma
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)