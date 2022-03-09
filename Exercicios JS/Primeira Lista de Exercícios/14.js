function fruta(param) {
    switch (param) {
        case "maca":
            console.log("Não vendemos esta fruta aqui")
            break
        case "kiwi":
            console.log("Estamos com escassez de kiwis")
            break
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo")
            break
        default:
            console.error("erro")
    }
}

fruta("maca")
fruta("melancia")
fruta("kiwi")
fruta(13)