function removerPropriedade(obj, matricula) {
    const ob = Object.assign({}, obj)
    delete ob[matricula]
    return ob
    
}

const eu = { id: 1, nome: "Thiago", matricula: 1234}

console.log(removerPropriedade(eu, "matricula"))

//2 exemplo

function removerPropriedade(obj, matricula) {
    const ob = {...obj}
    delete ob[matricula]
    return ob
    
}

console.log(removerPropriedade(eu, "id"))