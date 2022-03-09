function anuidade(mes, valor) {
    for (let i = 0; i < mes; i++) {
        valor = valor + (valor*0.05)
    }
    return valor.toFixed(2)
}

console.log(anuidade(10, 100))