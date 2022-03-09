function contarCaractere(caractereBuscado, frase) {
    let contador = 0
    for (let i = 0; i < frase.length; i++)
        if (frase.charAt(i) === caractereBuscado)
            contador++
    return contador
}


console.log(contarCaractere("r", "A sorte favorece os audazes"))

//ex 2

function contarCaractere2(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
}

console.log(contarCaractere2("c", "Conhece-te a ti mesmo"))