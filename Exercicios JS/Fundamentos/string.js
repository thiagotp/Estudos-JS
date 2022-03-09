const escola = "Unifacs"

console.log(escola.charAt(4)) //retorna o valor do índice indicado
console.log(escola.charCodeAt(4)) //retorna o valor (tabela ascii ou unicode) do índice indicado
console.log(escola.indexOf('a'))//retorna o índice de determinado valor na string

console.log(escola.substring(3))//retorna a string a partir do índice selecionado
console.log(escola.substring(0, 3))//retorna a string entre o range declarado (nesse caso incluindo o índice 0 e não incluindo o índice 3)

console.log("Universidade ".concat(escola).concat(" Salvador"))//concatenação
console.log("3"+ 2)//concatenação
console.log("3.4"+ 8)//concatenação

console.log(escola.replace("i", 1))
console.log(escola.replace(/\w/g, "k" ))

console.log('primeiro, segundo, terceiro'.split(","))//convertendo uma string em array

