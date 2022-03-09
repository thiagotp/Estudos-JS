function contem(vetor) {
    let fazParte = 0, nFazParte = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            fazParte++
        }else{
            nFazParte++
        }
    }
    return `Do vetor ${vetor} temos ${fazParte} números que fazem parte do intervalo [10, 20] e ${nFazParte} que não fazem parte`
}

console.log(contem([11,15,39]))