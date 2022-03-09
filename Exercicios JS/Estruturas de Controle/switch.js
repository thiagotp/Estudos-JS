const imprimirResultado = (nota) => {
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log("Quadro de Honra => nota ", Math.floor(nota))
            break
        case 8: case 7:
            console.log('Aprovado => nota ', Math.floor(nota))
            break
        case 6:
        case 5:
        case 4:
            console.log("Recuperação => nota ", Math.floor(nota))
            break
        case 3:
        case 2:
        case 1: case 0:
            console.log("Reprovado => nota ", Math.floor(nota))
            break
        default:
            console.log("Nota Inválida => nota ", Math.floor(nota))

    }
}

imprimirResultado(9.8)
imprimirResultado(8.8)
imprimirResultado(6)
imprimirResultado(5)
imprimirResultado(2.8)
imprimirResultado(11)