const pessoa = {
    nome: "Thiago",
    idade: 27,
    endereco: {
        logradouro: "Brotas",
        numero: 174
    }
}

//Aqui estou retirando do objeto pessoa os atributos nome e idade
const { nome, idade } = pessoa
console.log(nome, idade)
const { nome: outroNome, idade: outroNomeIdade } = pessoa
console.log(outroNome, outroNomeIdade)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro: bairro, numero: n = null, cep = null } } = pessoa
console.log(bairro, n, cep)