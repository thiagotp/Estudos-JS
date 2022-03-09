function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade ++
        console.log(this.idade)
    }, 1000)
}

/**
 * Nesse caso o this dentro do setInterval não está apotando para pessoa
 * porque a função dentro do setInterval está sendo disparada por um temporizador que está contido no setInterval
 * assim sendo o this mudou de escopo por isso o retorno é NaN
 */
new Pessoa

/**
 * Nesse caso o this está sendo amarrado ao escopo com o bind porque a função setInterval já está dentro de Pessoa1
 * assim o this garante que é o objeto pessoa
 */
function Pessoa1(){
    this.idade = 0

    setInterval(function(){
        this.idade ++
        console.log(this.idade)
    }.bind(this), 1000)
}
new Pessoa1

function Pessoa2(){
    this.idade = 0

    //como esse this está sendo criado dentro do próprio escopo, ele garante a amarração ao objeto
    const self = this
    setInterval(function(){
        self.idade ++
        console.log(self.idade)
    }, 1000)
}
new Pessoa2