function buscarPalavrasSemelhantes(param, vector){
    return [...vector].filter(trecho => trecho.includes(param))
}

//ex 2 

function buscarPalavrasSemelhantes2(param, vector){
    const result = []
    for(let i = 0; i<vector.length;i++){
        if(vector[i].includes(param))
        result.push(vector[i])
    }
    return result
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])) // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes2("pro", ["programação", "mobile", "profissional"])) // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]))
console.log(buscarPalavrasSemelhantes2("python", ["javascript", "java", "c++"]))