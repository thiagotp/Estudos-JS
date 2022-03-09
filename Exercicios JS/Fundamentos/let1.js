//o let fica limita ao escopo no qual foi criado

let numero = 1
{
    let numero =2 
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)
console.log('=====================================================')
//Nesse caso o let procura primeiro no escopo menor se ele existe
//como não acha ele vai procurar no escopo maior
let teste = 1
{
    let teste2 =2 
    console.log('dentro = ', teste)
}
console.log('fora = ', teste)

/**
 * o let tem escopo global, de função e de bloco
 */