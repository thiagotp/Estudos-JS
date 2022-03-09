function jurosSimples(capInicial, taxaJuros, tempoAplicacao) {
    let result = capInicial + (capInicial * taxaJuros) * tempoAplicacao
    console.log(result)
}

jurosSimples(1000, 0.1, 4)

function jurosComposto(capInicial, taxaJuros, tempoAplicacao) {
    let juros = 1 + taxaJuros
    let result = capInicial * (Math.pow((juros), tempoAplicacao))
    return result
}

console.log(jurosComposto(100, 0.1, 2).toFixed(2))

console.log("Arrow Function")

let jurosS = (capInicial, taxaJuros, tempoAplicacao) =>{
    let result = capInicial + (capInicial * taxaJuros) * tempoAplicacao
    console.log(result)
}

jurosS(1000, 0.1, 4)

let jurosC = (capInicial, taxaJuros, tempoAplicacao) =>{
    let juros = 1 + taxaJuros
    let result = capInicial * (Math.pow((juros), tempoAplicacao))
    return result
}

console.log(jurosC(100, 0.1, 2).toFixed(2))