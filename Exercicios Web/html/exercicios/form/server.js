//Fazendo a requisição do express para uso
const express = require('express')
//Instânciando o express e atribuindo ele a variável app
const app = express()
//o body-parser irá interpretar o corpo da requisição para que tenhamos acesso ao conteúdo
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    //Para métodos get
    console.log(req.query)
    resp.send('<h1>Parabéns! Usuário Incluído</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns! Usuário Alterado!</h1>')
})

app.listen(3003)