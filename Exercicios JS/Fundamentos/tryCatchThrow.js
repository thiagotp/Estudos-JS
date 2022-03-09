function tratarErro(err) {
    //throw new Error('Aconteceu um erro durante a execução')
    throw{
        nome: err.name,
        msg: err.message
    }
}

/**
 * O try irá tentar executar o código
 * Caso aconteça algum erro na execução do código a execução cairá no catch
 * Throw irá imprimir a mensagem que você configura para exibir o erro
 * Finally será executado ocorrendo um erro ou não
 */
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUppercase() + "!!!")
    } catch (e) {
        tratarErro(e)
    } finally{
        console.log("the end")
    }
}

const obj = {
    nome: "Thiago"
}
imprimirNomeGritado(obj)