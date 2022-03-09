function treino(vetor){
    let maior = vetor[0]
    let menor = vetor[0]
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i]>= maior){
            maior = vetor[i]
        }
        if(vetor[i] <= menor){
            menor = vetor[i]
        }
    }
    return `Maior: ${maior}, Menor: ${menor}`
}

console.log(treino([1,2,3,6,0]))