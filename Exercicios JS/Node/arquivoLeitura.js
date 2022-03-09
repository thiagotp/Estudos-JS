//modulo de leitura de arquivo que já vem instalado no Node
const fs = require('fs')

//configurando o caminho do arquivo
const caminho = __dirname + '/arquivo.json'
//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    //testando se a variável erro existe (se deu erro)
    if (err) {
        console.log(err)
    } else {
        const config = JSON.parse(conteudo)
        console.log(`${config.db.host}:${config.db.port}`)
    }
})

//como o arquivo que está sendo lido é um json, não seria necessário usar o fs
const readJson = require('./arquivo.json')
console.log(readJson.db)

//lendo uma pasta
fs.readdir(__dirname, (err, arquivos) => {
console.log("Conteúdo da pasta...")
console.log(arquivos)
})

//__dirname = diretorio atual