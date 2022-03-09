//função em JS é Fist-Class Object/Citizens
//High-Order function

//Toda função JS retorna um valor undefiened caso ela não tenha "return"

//Criando função de forma literal
function fun1() {

}

//Armazenar em um variável
const fun2 = function () {

}

//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
    console.log("OPA!")
}
console.log(obj.falar())

//Passar função como parametro
function run(fun) {
    fun()
}

run(function () {
    console.log('executando')
})

//Uma função pode retornar/conter outra função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

//Como o resultado da função soma é uma função você já pode passar o próximo parâmetro logo em seguida
soma(2, 3)(4)

const result = soma(2, 3)
result(4)