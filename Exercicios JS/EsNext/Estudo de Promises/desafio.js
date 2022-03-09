const fs = require('fs')
const path = require('path')


function lerAquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler o arquivo')
    })
}


const caminho = path.join(__dirname, 'dados.txt')

lerAquivo(caminho)
    .then(arquivo => console.log(arquivo))