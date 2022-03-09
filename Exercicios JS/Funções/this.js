//this => Referencia o objeto atual da execução (objeto do contexto da execução)

function f1() {
    console.log(this === window)
}
//Se testar no browser é true!
f1()

//disparando função a partir do click do mouse para testar
//Nesse caso o this agora não é mais igual a window
document.getElementsByTagName('body')[0].onclick = f1

//no contexto global isso é false
function f2() {
    console.log(this === document)
}
document.getElementsByTagName('body')[0].onclick = f2

const body = document.getElementsByTagName('body')[0]
function f3() {
    console.log(this === body)
}
//Nesse caso irá dar true porque ao clickar no body o this está sendo executado por esse objeto atualmente
document.getElementsByTagName('body')[0].onclick = f3

//No caso da arrow function o this não muda de contexto
const f4 = () => console.log(this === window)
f4()
document.getElementsByTagName('body')[0] = f4