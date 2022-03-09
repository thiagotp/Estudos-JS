const schedule = require('node-schedule')

//Biblioteca para agendar tarefas
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

//Setando configurações de tempo para programar a tarefa
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 6)]
regra.hour = 1
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando Tarefa 2 ! ', new Date().getSeconds())
})