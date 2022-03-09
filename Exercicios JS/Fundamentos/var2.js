//o Var ignora o bloco de escopo a não ser que esse escopo seja de uma função

var numero = 1
{
    var numero = 2
    console.log("dentro = ",numero)
}
console.log("fora = ",numero)

/**
 * o var tem escopo global e de função 
 */