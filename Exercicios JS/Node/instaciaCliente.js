const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//como aqui o retorno do require é uma função então tenho que chamar a função para ter acesso ao obj
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//como o node faz um cache dos valores de un require mesmo incrementando A o contador B vai ter o valor alterado
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

//com a factory o cache não funciona

contadorC.inc()
contadorC.inc()
//Os valores dos contadores ficaram independentes
console.log(contadorD.valor)
console.log(contadorC.valor)