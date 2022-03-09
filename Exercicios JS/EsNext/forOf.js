for(let letra of 'Cod3r'){
    console.log(letra)
}


const assuntosEcma = ['Map', 'Set', 'Promise']
//me mostra os indices
for( let i in assuntosEcma){
    console.log(i)
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado : true}],
    ['Set', {abordado : true}],
    ['Promise', {abordado : false}]
])

//chave e valor
for (let assunto of assuntosMap){
    console.log(assunto)
}

//apenas as chaves
for (let chave of assuntosMap.keys()){
    console.log(chave)
}

//apenas os valores
for (let value of assuntosMap.values()){
    console.log(value)
}

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a','b','c'])
for (let letra of s){
    console.log(letra)
}

