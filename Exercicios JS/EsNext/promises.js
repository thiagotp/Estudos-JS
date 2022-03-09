function falarDeposiDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)//esse resultado aqui é passado para o then
        }, segundos * 1000)
    })
}

falarDeposiDe(3, "que legal!")
    .then(frase => frase.concat('?!?'))//nesse caso frase tem o resultado da promise
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))//catch -> trata o erro 