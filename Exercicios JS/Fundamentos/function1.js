//função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(1, 4)
imprimirSoma(2)
imprimirSoma(1, 4, 3, 5, 6, 6)
imprimirSoma()

//funcao com retorno
//=====================================
function soma(a, b = 0) {
  return a + b
}

console.log(soma(2, 3))
console.log(soma(13))
console.log(soma("a"))