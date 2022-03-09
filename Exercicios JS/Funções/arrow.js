//Mostrando a diferença na forma de escrita entre função normal e função arrow

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//Caso você tenha um único parâmetro
//Quando você tira o corpo da função o retorno é implícito 
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return "Olá"
}

ola = () => "Olá"
console.log(ola())