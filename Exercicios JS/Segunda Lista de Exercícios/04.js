function mes(num){
    switch(num){
        case 1:
        return "janeiro"
        break
        case 2:
        return "fevereiro"
        break
        case 3:
        return "março"
        break
        case 4:
        return "abril"
        break
        case 5:
        return "maio"
        break
        case 6:
        return "junho"
        break
        case 7:
        return "julho"
        break
        case 8:
        return "agosto"
        break
        case 9:
        return "setembro"
        break
        case 10:
        return "outrubro"
        break
        case 11:
        return "novembro"
        break
        case 12:
        return "dezembro"
        break
        default:
        return "Mês não encontrado"
    }
}

function mes2(num){
    const mapeando = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"]
    return mapeando[--num]
}
console.log(mes(4))
console.log(mes2(5))