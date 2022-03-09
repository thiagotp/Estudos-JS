function numerosNegativos(vetor){
    let negativos=0
    for(let i=0;i<vetor.length;i++){
        if(vetor[i]<0){
            negativos++
        }
    }
    return `Tem ${negativos} números negativos no vetor`
}

console.log(numerosNegativos([-1,-2,-3,-4,-5,0,1,2]))