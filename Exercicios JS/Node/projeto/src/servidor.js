const porta = 3003
const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

//listar todos objs
app.get('/produtos', (req, res, next) => {
    //send envia uma resposta
    res.send(bancoDeDados.getProdutos())
})

//mostrar um determinado obj
app.get('/produtos/:id', (req, res, next) => {
    //send envia uma resposta
    res.send(bancoDeDados.getProduto(req.params.id))
})

//Salvar(enviar)
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//alterar
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//deletar
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProtudo(req.params.id)
    res.send(produto)
})
app.listen(porta, () => {
    console.log(`Servidor funcinando na porta ${porta}`)
})