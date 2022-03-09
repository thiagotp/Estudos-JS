//Padrão Observer 

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//Para cada elemento que o forEach encontrar no array ele irá chamar a função imprimir com os parâmetros corretos
fabricantes.forEach(imprimir)
console.log("======================")
fabricantes.forEach(function(a){
    console.log(a)
})
console.log("======================")
fabricantes.forEach(fabricante => console.log(fabricante))