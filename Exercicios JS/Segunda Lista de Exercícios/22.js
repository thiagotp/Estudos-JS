function funcaoSorte(number) {
    let sorteio = Math.floor(Math.random() * (10 - 1) + 1)
    if (sorteio == number) {
        return `Parabéns, o número sorteado foi ${sorteio}`
    } else {
        return `Que pena! O número sorteado foi ${sorteio}`
    }
}

console.log(funcaoSorte(4))

