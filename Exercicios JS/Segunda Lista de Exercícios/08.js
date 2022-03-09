function mult(num, vezes) {
    let numero = 0
    for (let i = 0; i < vezes; i++) {
        numero += num
    }
    return numero
}

function mult2(num, vezes) {
    if (num === 0 || vezes === 0) return 0
    return vezes === 1 ? num : num + mult2(num, vezes-1)
}


console.log(mult(5, 3))
console.log(mult2(5, 2))