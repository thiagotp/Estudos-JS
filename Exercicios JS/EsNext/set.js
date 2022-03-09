//não aceita repetição/não indexada 

const times = new Set()
times.add('Vasco')
times.add('Bahia').add('Vasco').add('Vitória')

console.log(times)
console.log(times.size)
//case sensitive
console.log(times.has('vasco'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)