let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adiciona(vetor1, vetor2) {
    console.log("vetor 1: ",vetor1)
    console.log("vetor 2: ",vetor2)
    let vetorAdicionado3 = vetor1
    for (let i = 0; i < vetor2.length; i++) {
        vetorAdicionado.push(vetor2[i])
    }
    return vetorAdicionado3
}
console.log(adiciona(vetorPilha, vetorAdiciona))
console.log(adiciona(vetorAdiciona, vetorPilha))