function dinheiro(x, y) {
    let result = x + y
    console.log(`R$ ${result.toFixed(2).replace('.', ',')}`)
}

dinheiro(0.1, 0.2)

console.log("Arrow Function")

let result = (x, y) => {
    console.log(`R$ ${(x + y).toFixed(2).replace('.', ',')}`)
}

result(0.4, 0.5)
