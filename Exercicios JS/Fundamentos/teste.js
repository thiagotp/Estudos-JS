let a = 3

global.b = 123

//Aqui o this está exportando o c para fora do módulo
this.c = 456

this.d = false
this.e = 'teste'
console.log(module.exports)
console.log(this)

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
//this no caso é igual a module.exports

//criando uma variavel sem var e let (ela entra no objeto global do node)
abc = 3
console.log(global.abc)