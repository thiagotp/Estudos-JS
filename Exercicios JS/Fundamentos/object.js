//Criando atributos dinâmicamente no objeto 
const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.4
console.log(prod1)


//estrutura ninhada de obj
const prod2 = {
    nome: 'Camisa Polo',
    preco: 85.13,
    obj: {
        bla : 1,
        bla2: {
            teste: 3
        }
    }
}

console.log(prod2)