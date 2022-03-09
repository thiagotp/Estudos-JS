//Closure é o escopo criado quando você declara sua função
//Esse escopo permite que a função acesse e manipule variáveis externas à função

//Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())