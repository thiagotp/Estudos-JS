const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        //this está se referenciando ao objeto pessoa
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar  = pessoa.falar
//conflito entre paradigmas: funcional e OO
/*
saudacao está apontando para um this que não é mais o objeto pessoa nesse exemplo
e esse objeto que está chamando a função não tem "saudacao" dentro dele, logo, retorna undefined
**/
falar()

/**
 *Usando o bind você amarra o "this" no contexto que você quer evitando o problema acima
 */
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
