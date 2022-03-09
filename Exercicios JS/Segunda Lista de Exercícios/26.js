function removerVogais(text) {
    return text.replace(/[aeiou]/ig, '')
}

//ex 2 

function removerVogais2(text) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach(vogal => text = text.replace(vogal, ''))
    return text
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))
console.log(removerVogais2("Cod3r"))
console.log(removerVogais2("Fundamentos"))