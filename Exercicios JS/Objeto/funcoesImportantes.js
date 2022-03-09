const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

//Pegando as chaves do objeto
console.log(Object.keys(pessoa))

//Pegando os valores existentes em um objeto
console.log(Object.values(pessoa))

//Pegando a composição do objeto (chaves e valores)
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}:${e[1]}`)
})
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}:${valor}`)
})

//Definindo uma propriedade e suas características
Object.defineProperty(pessoa, 'dataNascimento', {
    //será listada
    enumerable: true,
    //nao pode ser modificada
    writable: false,
    value: '31/08/1993'
})

pessoa.dataNascimento = "01/03/2031"
console.log(pessoa)

//Object.assign (ECMAScript 2013)

const dest = {
    a:1
}
const o1 = {b:2}
const o2 = {c:5, a:4}
//Concatenando os objetos em um só (O primeiro será o resultado da concatenação)
Object.assign(dest, o1, o2)
console.log(dest)
console.log(obj)