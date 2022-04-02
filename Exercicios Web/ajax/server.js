const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
// Se o formato vier for a partir de um submit usará bodyParser.urlencoded({ extended: true})
// para ler os dados e transformar em um objeto
app.use(bodyParser.urlencoded({ extended: true }))
// Se o formato que vier for um JSON, usará bodyParser.json()
app.use(bodyParser.json())


// Dando start no servidor
app.listen(8080, () => console.log('Executando ....'))

/* Se a porta estiver sendo utilizada
ou escolhe outra porta ou mata o processo que está utilizando a porta pelo terminal
*/