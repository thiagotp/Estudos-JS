function simboloMais(param){
    let string = ""
    for(let i = 0; i<param; i++){
        string += "+"
    }
    return string
}

function simboloMais2(param){
    return Array(param).fill("+").join("")
}

function simboloMais3(param){
    return ("+").repeat(param)
}


console.log(simboloMais(4))
console.log(simboloMais2(7))
console.log(simboloMais3(25))