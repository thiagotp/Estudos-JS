function inverso(param) {
    if (typeof param == "boolean") {
        return !param
    }else if(typeof param == "number"){
        return param * -1
    }else{
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof param}`
    }
}

console.log(inverso(false))
console.log(inverso(4))
console.log(inverso("a"))