//ES8: Object.values/Object.entries

const obj = { a: 1, b: 2, c: 3 }

console.log("Chaves: ")
console.log(Object.keys(obj))
console.log("Valores: ")
console.log(Object.values(obj))
console.log("Chave e Valor: ")
console.log(Object.entries(obj))

//Melhorias no Notação Literal
const nome = "Thiago"
const pessoa = {
    //se a chave irá receber uma variavel de mesmo nome não precisa repetir
    nome,
    //não precisa da palavra function
    ola(){
        return "oi"
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal{}
class Cachorro extends Animal {
    falar(){
        return "Auuuu!"
    }
}

console.log(new Cachorro().falar())