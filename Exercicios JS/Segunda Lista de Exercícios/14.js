function atributos(obj){
    const result = []
    for(let key in obj){
        result.push([key, obj[key]])
    }
    return result
}
const eu = { id: 1, nome: "Thiago", matricula: 1234}
console.log(atributos(eu))

//exemplo 2

function atributos2(obj){
    const chaves = Object.keys(obj)
    const result = chaves.map( chave => [chave, obj[chave]])
    return result
}

console.log(atributos2(eu))

//exemplo 3

function atributos3(obj){
   const result = Object.entries(obj)
    return result
}

console.log(atributos3(eu))