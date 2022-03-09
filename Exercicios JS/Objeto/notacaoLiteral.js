const a = 1
const b = 2
const c = 3

//antigamente
const obj1 = {
    a: a,
    b: b,
    c: c
}

//melhoria
//Como os nomes são iguais, tanto da chave quanto da variável, não é necessário repetir
const obj2 = {
    a,
    b,
    c
}
console.log(obj1, obj2)

//Criando atributo com o nome da variável
const nomeAttr = 'nota'
const valorAttr = 8.65
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//ou
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//forma antiga de definir funções em um objeto
const obj5= {
    funcao: function(params) {
        //...
    },
    //forma nova
    funcao2(){
        //...
    }
}

console.log(obj5)

