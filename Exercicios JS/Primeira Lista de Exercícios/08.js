function pontuacao(array) {
    let vector = array.split(" ")
    let comp = 0, record = 0, bad = 0, retorno2 = []
    comp = vector[0]
    vector.forEach(element => {
        console.log(comp," < ",element,"   ",(comp<element))
        e = parseInt(element)
        if (comp < element) {
            comp = e
            record++
        }
    });
    bad = vector.length+1 - record
    retorno2.push(record)
    retorno2.push(bad)
    return retorno2

}

console.log(pontuacao("10 20 20 8 25 3 0 30 1"))