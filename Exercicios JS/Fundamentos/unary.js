let num1 = 1
let num2 = 2

num1++ //pós fixado, adiciona uma unidade a variável
console.log(num1)
--num1 //pré fixado, retira uma unidade da variável(tem prioridade maior sobre o pós fixado)
console.log(num1)

console.log(++num1 === num2--)//sentença de código que pode causar confusão. Tente sempre deixar o mais simples possível
console.log(num1 === num2)