//falso porque o this aponta para module.exports
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
//Nesse caso o this aponta para o mesmo caminho de module.exports
console.log(this === exports)

function logThis(){
    console.log('Detro de uma função')
    console.log(this === exports)
    //This dentro de uma função aponta para global
    console.log(this === global)
}
logThis()