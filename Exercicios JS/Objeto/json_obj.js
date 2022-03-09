const obj = {
    a: 2,
    b: 3,
    c: 5,
    soma(){
        return  a+b+c
    }
}

//transformando um Objeto em JSON
console.log(JSON.stringify(obj))

//transformando um JSON em Objeto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 4}'))
console.log(JSON.parse('{"a": 45, "b": "string", "c": true, "d": {}, "e": []}'))
