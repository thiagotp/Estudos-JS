//MAP -> serve para transformar um array em outro de mesmo tamanho 

const nums = [1, 2, 3, 4, 5]

//internamente o map possui um for e esse for será o responsável por fazer as alterações nos elementos
let resultado = nums.map((e) => {
    return e * 20
})

console.log(resultado)

const soma10 = e => e +10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)