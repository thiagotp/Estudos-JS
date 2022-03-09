function pagamento(idade){
    valor = 100
    if(idade >= 60){
        valor += 130
    }else if(idade > 30 && idade < 60){
        valor += 95
    }else if(idade >=10 && idade <=30){
        valor += 50
    }else{
        valor +=80
    }
    return valor
}

console.log(pagamento(60))
console.log(pagamento(1))
console.log(pagamento(15))
console.log(pagamento(45))