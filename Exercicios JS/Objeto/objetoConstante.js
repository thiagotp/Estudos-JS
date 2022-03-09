/** 
 * a constante pessoa aponta para um endereço de memória "X"
 * no endereço de memória X que está criado o objeto pessoa
 * quando a gente muda o nome de João para Pedro a gente não muda a referência da constante pessoa
 * ou seja ou endereço de memória que ela tem e sim o que está dentro desse endereço de memória
 * pessoa -> "endereco de memoria" -> {...}
 *  */
const pessoa = {nome: 'João'}
pessoa.nome = "Pedro"
console.log(pessoa)

/**
 * Nesse exemplo abaixo está ocorrendo uma tentativa de que a constante pessoa receba o endereço de memória do objeto que contem "Ana"
 * ou seja, está acontecendo a tentativa de mudar o endereço de memória que a constante está apontando
 * logo como pessoa é uma constante isso irá gerar um erro
 */
//pessoa = {nome: "Ana"}

//Ao utilizar o freeze você não consegue mais mexer no objeto (alterar o objeto de maneira alguma)
Object.freeze(pessoa)
pessoa.nome = "Maria"
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: "Joao"})
pessoa.nome = "Rita"
console.log(pessoaConstante)