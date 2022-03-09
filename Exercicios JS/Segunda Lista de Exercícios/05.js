comparacao = (num1,num2)=>{
    if (num1 > num2){
        return `${num1} > ${num2}`
    }else if (num1 == num2){
        return `${num1} = ${num2}`
    }else{
        return `${num1} < ${num2}`
    }
}

console.log(comparacao(10,20))