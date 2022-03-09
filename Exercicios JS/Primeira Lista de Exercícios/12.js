function fatorial (num){
    let result = 1
    for(let i = num;i >=1 ; i-- ){
        result = result * i
    }
    return result
}

console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))