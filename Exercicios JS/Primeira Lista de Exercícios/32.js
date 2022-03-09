function media(vetor){
    let media = 0
    let soma = 0
    for(let i=0;i<vetor.length;i++){
        soma = soma + vetor[i]
    }
    media = soma/vetor.length
    return media
}

let vetor = [1,2,3]
console.log(media(vetor))