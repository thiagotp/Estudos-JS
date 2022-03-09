function conta(cod, quant) {
    switch (cod) {
        case 100:
            return `${quant} Cachorro(s) quente(s) R$: ${quant * 3}`
            break
        case 200:
            return `${quant} Hambúrguer(es) Simples R$: ${quant * 4}`
            break
        case 300:
            return `${quant} Cheeseburguer(s) R$: ${quant * 5.5}`
            break
        case 400:
            return `${quant} Bauru(s) R$: ${quant * 7.5}`
            break
        case 500:
            return `${quant} Refrigerante(s) R$: ${quant * 3.5}`
            break
        case 600:
            return `${quant} Suco(s) R$: ${quant * 2.8}`
            break
        default:
            return "produto inexistente"
    }
}

console.log(conta(100, 4))
console.log(conta(200, 4))
console.log(conta(300, 4))
console.log(conta(400, 4))
console.log(conta(500, 4))
console.log(conta(600, 4))