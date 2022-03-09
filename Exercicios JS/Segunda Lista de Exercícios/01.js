function texto (param){
    return `Olá, ${param} !`
}

console.log(texto("Thiago"))

function texto2 (param){
    const saudacao = 'Olá'
    return [saudacao, param].join(', ').concat("!")
}

console.log(texto2('Oi'))