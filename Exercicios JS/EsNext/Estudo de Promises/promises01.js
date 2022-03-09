//Quando se tem uma promise você tem uma promessa de algo que vai ser resolvido no futuro

//A promise recebe como parâmetro uma função que será usada para resolver a promessa
let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(["Thiago", "Calos", "Alice"])
})

//Para acessar o resultado da promessa é necessário usar o "then"
p.then(function (valor) {
    //O valor aqui representa o mesmo valor da resolução da promise
    console.log(valor)
})

//aqui mostramos como o resultado vai passando de um then para o outro
//antes do "=>" é o valor e depois do "=>" está o que eu quero fazer com ele
p.then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => console.log(letra))

