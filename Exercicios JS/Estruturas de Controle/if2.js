function teste1(num) {
    //Nesse caso como tem apenas uma sentença de código o uso das {} é opicional
    if (num > 7)
        console.log(num)//apenas essa sentença está ligada ao IF
    console.log("final")
}

teste1(6)
teste1(9)

//cuidado com o ; pois ele indica o encerramento da sentença 
function teste2(num) {
    if(num >7);{
        console.log(num)
    }
}

teste2(6)
teste2(9)