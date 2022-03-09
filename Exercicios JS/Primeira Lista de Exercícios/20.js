function troco(quantidade) {
    let cem = 0
    let cinquenta = 0
    let dez = 0
    let cinco = 0
    let um = 0
    while (quantidade != 0) {
        if (quantidade >= 100) {
            quantidade = quantidade - 100
            cem++
        } else if (quantidade >= 50) {
            quantidade = quantidade - 50
            cinquenta++
        } else if (quantidade >= 10) {
            quantidade = quantidade - 10
            dez++
        } else if (quantidade >= 5) {
            quantidade = quantidade - 5
            cinco++
        } else {
            quantidade = quantidade - 1
            um++
        }
    }
    return `${cem} nota(s) de 100\n${cinquenta} nota(s) de 50\n${dez} nota(s) de 10\n${cinco} nota(s) de 5\n${um} nota(s) de 1`
}

console.log(troco(193))
console.log("===========================")
console.log(troco(200))
console.log("===========================")
console.log(troco(201))
console.log("===========================")
console.log(troco(37))