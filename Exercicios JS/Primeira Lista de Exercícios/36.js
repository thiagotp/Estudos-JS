function multiplica(vetor, mult) {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i]=vetor[i]*mult
    }
    return vetor
}

console.log(multiplica([1,2,3], 3))

function multi(vetor, mult){
    let vet = vetor
    let vezes = mult
    let result = []
    if(vezes > 5){
        result = multiplica(vet,vezes)
    }else{
        return "Operação não realizada"
    }
    return result
}

console.log(multi([1,2,3],3))
console.log(multi([1,2,3],6))