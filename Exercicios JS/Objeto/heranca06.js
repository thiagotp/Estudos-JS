function Aula (nome, videoId){
    this.nome = nome,
    this.videoId = videoId
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Logo', 456)

console.log(aula1, aula2)

//simulado o operador new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, "Bem vindo", 147)
const aula4 = novo(Aula, "Até Mais", 258)
console.log(aula3, aula4)