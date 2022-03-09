function media(cod, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a < b ? 1 : -1)

    let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10

    return `Código do aluno: ${cod} ->\n Primeira Nota: ${nota1}\n Segunda Nota: ${nota2}\n Terceira Nota: ${nota3}\n Média: ${media.toFixed(2)}\n Status: ${media > 5 ? "Aprovado" : "Reprovado"}`
}

console.log(media(4141, 3.4, 9.8, 8))
console.log(media(4141, 3.4, 1.8, 8))