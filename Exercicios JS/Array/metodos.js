const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']


pilotos.pop()//retira o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//adiciona um elemento na última posição do array
console.log(pilotos)

pilotos.shift()//retira o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona um elemento no inicio do array
console.log(pilotos)

//splice pode adicionar e remover elemento o array

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.splice(2)//Novo array a partir da posição escolhida
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(0, 3)//Cria um array entre o range delimitado
console.log(algunsPilotos1)