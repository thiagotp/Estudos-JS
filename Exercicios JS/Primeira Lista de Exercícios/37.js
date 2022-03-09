function pa(termo, primeiro, razao) {
    let vetor = []
    vetor.push(primeiro)
    for (let i = 1; i < termo; i++) {
        vetor.push(vetor[i - 1] + razao)
    }
    return vetor
}

function pg(termo, primeiro, razao) {
    let vetor = []
    vetor.push(primeiro)
    for (let i = 1; i < termo; i++) {
        vetor.push(vetor[i - 1] * razao)
    }
    return vetor
}

console.log(pa(5, 3, 4))
console.log(pg(5, 3, 4))