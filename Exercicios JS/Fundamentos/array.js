const valores = [3.4,1.3,4.6,7.5]
console.log(valores[0] , valores[3])
console.log(valores[4])

console.log('---------------------------------------------')
valores[4] = 10
console.log(valores.length)
valores[10] = 17

console.log('---------------------------------------------')
console.log(valores[4])
console.log(valores)
console.log(valores.length)
console.log('---------------------------------------------')

valores.push("ok", false, null, {id:3})//adicionando elementos no array
console.log(valores)
console.log(valores.length)

console.log('---------------------------------------------')
console.log(valores.pop())//retirando o último elemento do array
console.log(valores)
console.log(valores.length)
console.log('---------------------------------------------')
delete valores[0]//retirando o elemento que eu quero do array
console.log(valores)
console.log(valores.length)

console.log(typeof valores)// em JS array é um object