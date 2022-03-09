//par nome/valor
const saudacao = "Opa"//contexto léxico 1

function exec(){
    const saudacao = "Fala"//contexto léxico 2
    return saudacao
}
//Nesse caso como a costante não muda de valor ela continua com "Opa" fora da função
//Escopos diferentes
console.log(exec())
console.log(saudacao)

const cliente = {
    nome: "Thiago",
    idade: 27,
    peso: 78,
    endereco: {
        logradouro: "Brotas",
        numero: 174
    }
}
console.log(cliente)