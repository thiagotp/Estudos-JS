//formas de exportar o conteudo do arquivo
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

//A forma correta de uso é o module.exports porque ele é o único que retorna um novo objeto
//A outra formas retornam apenas atributos sem a criação de um novo objeto