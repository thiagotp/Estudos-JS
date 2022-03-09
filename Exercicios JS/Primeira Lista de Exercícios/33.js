function concatenando(vetor1,vetor2){
    let vetor3 = vetor1.concat(vetor2)
    return vetor3
}

let vetorInteiro = [1,2,3]
let vetorDouble = [1.3,2.6,3.9]
let vetorString = ["um","dois","três"]

console.log(concatenando(vetorInteiro,vetorString))
console.log(concatenando(vetorDouble,vetorString))