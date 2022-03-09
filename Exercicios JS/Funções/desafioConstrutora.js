function Pessoa (nome){
    this.getNome = () => console.log(nome)
}

const p1 = new Pessoa("Thiago")
p1.getNome()
