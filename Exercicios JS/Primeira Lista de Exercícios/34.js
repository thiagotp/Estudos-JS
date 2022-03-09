function compara(string1, string2) {
    let contatodar1 = 0
    let contatodar2 = 0
    let letra
    for (let i = 0; i < string1.length; i++) {
        letra = string1[i].toLowerCase()
        console.log("primeiro ", letra)
        for (let j = 0; j < string2.length; j++) {
            if(letra === string2[j]){
                contatodar1++
            }
        }

    }
    console.log(contatodar1)
    for (let i = 0; i < string2.length; i++) {
        letra = string2[i].toLowerCase()
        console.log("segundo ", letra)
        for (let j = 0; j < string1.length; j++) {
            if(letra === string1[j]){
                contatodar2++
            }
        }

    }
    console.log(contatodar2)
    if(contatodar1 === contatodar2 && contatodar2 !== 0 && contatodar1 !== 0){
        return true
    }else{
        return false
    }
}

console.log(compara('abc','yug'))