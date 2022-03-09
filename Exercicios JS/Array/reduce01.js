const alunos = [
    { nome: "João", nota: 8.3, bolsista: false },
    { nome: "Maria", nota: 7.3, bolsista: true },
    { nome: "Pedro", nota: 9.3, bolsista: false },
    { nome: "Ana", nota: 6.3, bolsista: true }
]

//Desafio 1: Todos os alunos são bolsistas?

let resultado = alunos.map(a => a.bolsista).reduce(function(inicial, proximo){
    console.log(inicial, proximo)
    return inicial && proximo
})

console.log(resultado)

resultado = alunos.map(a => a.bolsista).reduce(function(inicial, proximo){
    console.log(inicial, proximo)
    return inicial || proximo
})

console.log(resultado)
