//voltando duas pastas com o caminho relativo
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

//acessando com o caminho absoluto
const moduloB = require('C:/Users/Thiago/Desktop/Estudos-JS/Node/moduloB.js')
console.log(moduloB.boaNoite())

//O leitor sempre vai procurar a arquivo de nome index para fazer a importação
const c = require('./pastaC/index')
console.log(c.ola)

//acessando arquivos diretamente o node_module
const saudacao = require('saudacao')
console.log(saudacao) 

//acessando novamente modulo interno do node
const http = require('http')
http.createServer((req, res)=>{
    res.write("Bom dia!")
    res.end()
}).listen(8080) 