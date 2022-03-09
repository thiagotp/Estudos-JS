const name = 'Rebeca'
const template = `Olá
${name} !`

console.log(name, template)

//expressões................................
console.log(`1 + 1 = ${1 + 1}`)

const up = s => s.toUpperCase()
//chamando arrow function dentro da template string
console.log(`Ei... ${up('cuidado')}`)