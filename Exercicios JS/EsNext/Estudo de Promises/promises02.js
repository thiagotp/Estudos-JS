setTimeout(() => {
    console.log('Executando Callback...')

    setTimeout(() => {
        console.log('Executando Callback 2...')

        setTimeout(() => {
            console.log('Executando Callback 3...')
        }, 2000)
    }, 2000)
}, 2000)



function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Executando Promise...")
            resolve('Foi!!')
        }, tempo)
    })
}


esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
    .then(console.log)