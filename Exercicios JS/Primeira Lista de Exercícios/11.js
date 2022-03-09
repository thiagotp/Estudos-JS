const bissexto = (num) => {
    if (num % 400 == 0) {
        console.log("Ano bissexto")
        return true
    } else if (num % 100 == 0) {
        console.log("Ano bissexto")
        return true
    } else if (num % 4 == 0) {
        console.log("Ano bissexto")
        return true
    } else {
        console.log("Ano não é bissexto")
        return false
    }
}

bissexto(2000)
bissexto(2001)
bissexto(2002)