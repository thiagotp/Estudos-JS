function qualTriangulo(x, y, z) {
    if (x === y && y === z) {
        console.log("Triângulo Isósceles")
    } else if (x === y && y !== z) {
        console.log("Triângulo Escaleno")
    } else {
        console.log("Todos os lados diferentes")
    }
}

qualTriangulo(10, 10, 4)
console.log("==========")
qualTriangulo(10, 10, 10)
console.log("==========")
qualTriangulo(4, 5, 6)

console.log("==============\n Arrow\n")
const qualTriangulo2 = (x, y, z) => {
    if (x === y && y === z) {
        console.log("Triângulo Isósceles")
    } else if (x === y && y !== z) {
        console.log("Triângulo Escaleno")
    } else {
        console.log("Todos os lados diferentes")
    }
}

qualTriangulo2(10, 10, 10)
console.log("==========")
qualTriangulo2(10, 10, 4)
console.log("==========")
qualTriangulo2(4, 5, 6)