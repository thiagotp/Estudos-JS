//por convenção ao colocar o underline "_" em uma variável é entendido que ela é privada
const sequencia = {
    _valor: 1,
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
//Get: Retorna um valor
//Set: Altera um valor
//O js entende que se você tá querendo obter um valor você está usando a função get
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)