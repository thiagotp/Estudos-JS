function esperarPor(tempo = 2000){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('Executando...')
            resolve()
        }, tempo)
    })
}

function retornarValor(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10), 5000)
    })
}


//executando com async e await
async function executar(){
    let valor = await retornarValor()

    await esperarPor(3000)
    console.log(`Async/Await 1 ${valor}`)
    await esperarPor(3000)
    console.log(`Async/Await 2 ${valor + 10}`)
    await esperarPor(3000)
    console.log(`Async/Await 3 ${valor + 20}`)

    return `acabou com o valor ${valor}`
}

//para pegar o resultado de uma função async é necessário uar o then
executar().then(console.log)