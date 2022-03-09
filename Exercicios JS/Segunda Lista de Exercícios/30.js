//fazendo a soma das notas com recuce
const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
//após a soma com reduce será feito o calculo da média com essa função
const media = array => soma(array) / array.length

function recerberMelhorEstudante(estudantes) {
    //transformando o estudantes em um array de mesmo tamanho para facilitar o cálculo e retornando o objeto já com as médias calculadas
    const estudantesComMedias = Object.entries(estudantes).map(estudante => {
        console.log(estudante)
        const chave = 0,
            valor = 1
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    console.log(estudantesComMedias)
    //usando a função sort para ordenar os alunos por média
    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    //pegando o primeiro elemento que será o que tem maior média
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}))