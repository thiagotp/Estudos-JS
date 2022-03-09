function bissexto(param) {
    const divisivelQuatro = param % 4 == 0
    const divisivelCem = param % 100 == 0
    const divisivelQuatrocentos = param % 400 == 0

    return (divisivelQuatro && !divisivelCem) || divisivelQuatrocentos
}

//exemplo 2
//checando se o ano que foi escolhido tem 29 dias no mês de fevereiro

function bissexto2(param) {
    return new Date(param, 1, 29).getDate() === 29
}

console.log(bissexto(2020))
console.log(bissexto2(2020))