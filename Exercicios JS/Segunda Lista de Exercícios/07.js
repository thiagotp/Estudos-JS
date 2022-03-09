function entre(num, min, max, inclusivo = false){
    return inclusivo ?  num > min && num < max : num >= min && num <= max
}

console.log(entre(10, 0, 20, true))
console.log(entre(100, 0, 20))
console.log(entre(10, 0, 20))
console.log(entre(10, 11, 20))