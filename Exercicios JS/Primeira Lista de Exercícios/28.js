function parEimpar(vetor){
    let par = []
    let impar = []
    for(let i = 0; i < vetor.length; i++){
        console.log(i)
        if(vetor[i]%2 == 0){
            par.push(vetor[i])
        }else{
            impar.push(vetor[i])
        }
    }
    return `Números pares: ${par}, Números impares ${impar}`
}
let vetor = [1,2,3,4,5,6,7,8,9]
console.log(parEimpar(vetor))
console.log(parEimpar([1,2,3,4,5,6]))