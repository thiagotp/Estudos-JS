function troca(vetorA, vetorB) {
    tamanho = vetorA.length
    for (let i = 0; i < tamanho; i++) {
        vetorA[i] = vetorA[i] + vetorB[i]
        vetorB[i] = vetorA[i] - vetorB[i]
        vetorA[i] = vetorA[i] - vetorB[i]
    }
    return `Primeiro vetor: ${vetorA}, Segundo vetor: ${vetorB}`
}

console.log(troca([1, 2, 3, 4], [10, 20, 30, 40]))