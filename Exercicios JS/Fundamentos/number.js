const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.874

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2))
console.log(media.toString(6))
console.log(media.toString(8))
console.log(media.toString(16))
console.log(typeof media)

//Alguns cuidados

console.log(7/0.00001)
console.log(7/0) //Infinity
console.log( '45.41'/ 3.2) //Funciona operações de strings com números
console.log(0.1 + 0.8) // Imprecisão
console.log((7.878).toString())
console.log((7.878).toFixed(2))
