//let e const
{
    var a = 2
    const b = 3
    let c = 4
}
//const e let tem escopo de bloco
console.log(a)
//console.log(b)
//console.log(c)

//Template String

console.log(`aqui temos um template
string ${a}`)

//Operador Destructuring

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: "Ana", idade: 9 }
console.log(nome, i)