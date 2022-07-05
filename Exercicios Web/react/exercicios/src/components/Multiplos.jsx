import React from 'react'

const BoaTarde = props => {
    return <h1>Boa tarde {props.nome}!</h1>
}

const BoaNoite = props => {
    return <h1>Boa noite {props.nome}!</h1>
}

// direto pela variável
export default { BoaTarde, BoaNoite }
// acessando por um objeto
export { BoaTarde, BoaNoite }