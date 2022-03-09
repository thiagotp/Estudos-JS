function impar(inicio = 0, fim = 100) {
    let vetor = []
    if (fim > inicio) {
        for (let i = inicio; i < fim; i++) {
            if (i % 2 !== 0) {
                vetor.push(i)
            }
        }
    }else{
        for (let i = fim; i < inicio; i++) {
            if (i % 2 !== 0) {
                vetor.push(i)
            }
        } 
    }
    return vetor
}

console.log(impar(20,30))
console.log(impar(40,30))