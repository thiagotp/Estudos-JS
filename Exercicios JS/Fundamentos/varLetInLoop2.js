var funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

console.log("====================================================")
var funcs2 = []

for (let j = 0; j < 10; j++){
    funcs2.push(function(){
        console.log(j)
    })
}

funcs2[2]()
funcs2[8]()