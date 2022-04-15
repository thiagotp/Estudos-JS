const bodyParser = require('body-parser')
const express = require('express')
const app = express()
// interpretar o aquivo que vem do upload
const multer = require('multer')

app.use(express.static('.'))
// Se o formato vier for a partir de um submit usará bodyParser.urlencoded({ extended: true})
// para ler os dados e transformar em um objeto
app.use(bodyParser.urlencoded({ extended: true }))
// Se o formato que vier for um JSON, usará bodyParser.json()
app.use(bodyParser.json())

// configurando a pasta que o arquivo vai ficar e o nome do arquivo
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        // o segundo parâmetro é a pasta destino do arquivo
        callback(null, './upload')
    },
    // função para selecionar o nome do arquivo
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end("Ocorreu um erro")
        }
        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    // criando um objeto a partir da resposta do body e adicionando um ID
    res.send({
        ...req.body,
        id:1
    })
})

// Dando start no servidor
app.listen(8080, () => console.log('Executando ....'))

/* Se a porta estiver sendo utilizada
ou escolhe outra porta ou mata o processo que está utilizando a porta pelo terminal
*/