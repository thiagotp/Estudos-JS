//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções contrutoras
function Protudo(nome, preco, desconto) {
    this.nome = nome,
    this.getPreco = () => {
        return preco * (1-desconto)
    }
}

const p1 = new Protudo ("Caneta", 9.44, 0.15)
const p2 = new Protudo ("Lápis", 3.44, 0.25)

console.log(p1.getPreco(), p2.getPreco())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("João", 7980, 4)
const f2 = criarFuncionario("Maria", 11400, 1)

console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Função que retorna um objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)