function calculadora (num1, operate, num2){
    switch(operate){
        case "+":
            return num1 + num2  
            break
        case "-":
            return num1 - num2
            break
        case "*":
            return num1 * num2
            break
        case "/":
            return num1 / num2
            break
        default:
            return "Operação Inválida"
    }
}

console.log(calculadora(2,"-",3))
console.log(calculadora(2,"+",3))
console.log(calculadora(2,"*",3))
console.log(calculadora(2,"/",3))