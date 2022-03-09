//Função auto invocada
//IIFE -> Immediately Invoker Function Expression

(function(){
    console.log("Será executado na hora que a função for declarada !")
    console.log("Foge do escopo mais abrangente !")
})()