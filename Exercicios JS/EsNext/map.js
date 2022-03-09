const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias)
console.log(tecnologias.react)
console.log(tecnologias.get("react"))

//outra forma de criar um map

const chavesVariadas = new Map([
    //o primeiro elemento é a chave e o segundo é o valor
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [1, 'Número'],
    ['fuiae', 'String']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

//has -> está contido ou não
console.log(chavesVariadas.has(1))
console.log(chavesVariadas.delete(1))
console.log(chavesVariadas.has(1))
//size -> Quando elementos estão presentes dentro do map
console.log(chavesVariadas.size)