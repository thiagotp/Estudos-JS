//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "0"
const avo = {attr1:'A'}
const pai = {__proto__: avo, attr2:'B'}
const filho = {__proto__: pai, attr3:'C'}

//Buscando direto do avo e do pai por herança
console.log(filho.attr1, filho.attr2)
//Buscando direto do Object.prototype
console.log(filho.attr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

//Mesmo herdando atributos e funções ao exibir o objeto ele exibe apenas o que tem dentro dele sem a herança 
console.log(volvo)
console.log(ferrari)
volvo.acelerarMais(100)
console.log(volvo.status())