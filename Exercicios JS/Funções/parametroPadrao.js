//estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 4
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
//Usando a estrategia do "ou" ao passar o zero você está indicando que é falso o parâmetro e ele irá assumir o valor padrão
console.log(soma1(0, 0, 0))
console.log('======================')
//estrategia 2,3 e 4 para gerar valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 5
    c = isNaN(c) ? 2 : c

    return a + b + c
}

console.log(soma2())
console.log(soma2(4))
console.log(soma2(4, 5, 1))
console.log(soma2("", "fa", 0))
console.log(soma2(0, 0, 0))

console.log('======================')
//Usando o valor padrão do ES2015
function soma3(a = 1, b = 2, c = 6) {
    return a + b + c
}

console.log(soma3())
console.log(soma3("uhieuah"))
console.log(soma3(4, 5, 1))
console.log(soma3("", "fa", 0))
console.log(soma3(0, 0, 0))
