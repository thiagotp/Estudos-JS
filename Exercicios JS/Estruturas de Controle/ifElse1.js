const imprimirResultado = (nota) =>{
    if(nota >= 7){
        console.log("Aprovador com "+nota)
    }else{
        console.log("Reprovado com "+nota)
    }
}

imprimirResultado(8)
imprimirResultado(5.7)
imprimirResultado("Cuidado com a linguagem")
imprimirResultado("7")//cuidado