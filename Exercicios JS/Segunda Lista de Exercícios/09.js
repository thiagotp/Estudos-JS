function repetir(param, vezes) {
    let array = []
    for (let i = 0; i < vezes; i++) {
        array.push(param)
    }
    return array
}

const vetor = (param, vezes) =>{
    return Array(vezes).fill(param)
}
console.log(repetir("oi",3))
console.log(vetor("oi",8))