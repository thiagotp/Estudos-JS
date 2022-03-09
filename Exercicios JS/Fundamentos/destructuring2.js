//Criando uma variável 'a' que recebe o valor do primeiro elemento do array
const [a] = [10]
console.log(a)

//Retirando elementos no array 
const [n1, , n3, n4 = true, n5 = 0] = [10, 15, 1545 , 48, 48, 15]
console.log(n1,n3,n4,n5)

const [, [, nota]] = [[ , 8, 4], [54, 68, 63]]
console.log(nota)