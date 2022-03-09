//Arrow Function
const soma = (a, b) => a + b
console.log(soma(1, 8))

//Arrow Function (this)
//O this pode variar de acordo com a chamada da função
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//parametro default
//caso o parâmetro que venha seja undefined a variável texto assumirá o valor "Node"
function log (texto = 'Node') {
    console.log(texto)
}

log("oi")
log()
log(undefined)

//operador rest / spread

function total (...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
//aqui tenho numeros "espalhados" e o spread junta eles em um array possibilitando trabalhar com eles
console.log(total(1,2,3,4,5))