function aumento(plano, salario) {
    switch (plano.toUpperCase()) {
        case "A":
            return salario = salario + salario * 0.1
            break
        case "B":
            return salario = salario + salario * 0.15
            break
        case "C":
            return salario = salario + salario * 0.2
            break
        default:
            return "Plano inválido"
    }
}

console.log(aumento("a", 1500))
console.log(aumento("c", 1500))
console.log(aumento("b", 1500))