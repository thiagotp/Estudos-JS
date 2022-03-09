function gerarNumeroEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroEntre(1, 100, 4000),
        gerarNumeroEntre(1, 100, 1000),
        gerarNumeroEntre(1, 100, 400),
        gerarNumeroEntre(1, 100, 7000)
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros))