const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//minha solução do desafio
axios.get(url).then(response => {
    let menor
    let mulher
    const funcionarios = response.data
    const M = gender => gender.genero === 'F'
    const region = country => country.pais == "China"
    const arrayMulher = funcionarios.filter(M).filter(region)
    menor = arrayMulher[0].salario
    for(let i = 0; i< arrayMulher.length; i++){
        if(arrayMulher[i].salario <= menor){
            mulher = arrayMulher[i]
        }
    }
    console.log(mulher)
    
})

//solução do professor

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funciona, funcionaAtual) => {
    return funciona.salario < funcionaAtual.salario ? funciona : funcionaAtual
}

axios.get(url).then(response => {
    const funcionarios2 = response.data
    const func = funcionarios2.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func)
})