function notaFinal(nota) {
    if (nota === 38) {
        nota = 40
        console.log("Você foi reprovado com nota ", nota)
    } else if (nota <= 40) {
        console.log("Você foi reprovado com nota ", nota)
    } else {
        let pause = false
        let condicao = 0
        let multiplo = nota
        while (pause == false) {
            multiplo++
            if (((multiplo % 5) === 0)) {
                condicao = multiplo - nota
                if (condicao <= 3) {
                    nota = multiplo
                }
                pause = true
            }
        }
        console.log(`Você foi aprovado com nota ${nota}`)
    }
}
notaFinal(24)
notaFinal(38)
notaFinal(66)
notaFinal(68)