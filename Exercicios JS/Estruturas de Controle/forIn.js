const notas = [6.7, 7.4, 8.1, 7.7]

//o ForIn vai te trazer o índice e não o valor 
for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: "ana",
    sobrenome: "silva",
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}