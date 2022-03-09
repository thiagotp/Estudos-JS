function bhaskara(a, b, c) {
    let raiz1, raiz2, delta, result = []
    delta = (Math.pow(b, 2)) - (4 * a * c)
    raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
    raiz2 = (-b - Math.sqrt(delta)) / (2 * a)
    if (delta >= 0) {
        result.push(raiz1)
        result.push(raiz2)
        return result
    } else {
        return "Delta negativo"
    }
}
console.log(bhaskara(3, -15, 12))
console.log(bhaskara(9, -24, 16))

console.log("Arrow Function")

const delta = (a, b, c) => {
    let raiz1, raiz2, delta, result = []
    delta = (Math.pow(b, 2)) - (4 * a * c)
    raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
    raiz2 = (-b - Math.sqrt(delta)) / (2 * a)
    if (delta >= 0) {
        result.push(raiz1)
        result.push(raiz2)
        return result
    } else {
        return "Delta negativo"
    }
}

console.log(delta(1, -8, 12))
console.log(delta(1, 2, -8))
console.log(delta(3, -15, 12))