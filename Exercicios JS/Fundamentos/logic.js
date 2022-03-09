function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return {
        comprarSorvete,
        comprarTv50,
        comprarTv32,
        manterSaudavel
    }//Quando você cria um objeto apenas com um nome no atributo ele duplica o nome para a chave e valor
}
//true; true
console.log(compras(true, true))
//true; false
console.log("=================================")
console.log(compras(true, false))

//false; true
console.log("=================================")
console.log(compras(false, true))

console.log("=================================")
//false; false
console.log(compras(false, false))






/**
v e v = v
v e f = f
f e ? = f

v ou ? = v
f ou v = v
f ou f = f

v xor v = f
v xor f = v
f xor v = v
f xor f = f

!v = f
!f = v

 */