function numeros(vector){
    const result = []
    for(let i =0; i<vector.length;i++){
        if(typeof vector[i] === "number"){
            result.push(vector[i])
        }
    }
    return result
}

const vector = ["Oi", 2, 4, "tchau", 5]
const vector2 = ["Oi", "tchau"]

console.log(numeros(vector))
console.log(numeros(vector2))

//exemplo 2

function numerosFilter(vector){
    return vector.filter(item => typeof item === "number")
}

console.log(numerosFilter(vector))