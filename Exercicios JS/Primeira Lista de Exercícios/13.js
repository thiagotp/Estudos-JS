function diaSemana(num) {
    switch (num) {
        case 1:
        case 7:
            return "Fim de semana"
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia de semana"
            break
        default:
            return "Inválido"
    }
}

console.log(diaSemana(1))
console.log(diaSemana(2))
console.log(diaSemana(7))
console.log(diaSemana('faef'))




