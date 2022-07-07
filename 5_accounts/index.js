// modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

// modulos internos
const fs = require('fs')

operation()

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer',
        choices: [
            'criar conta',
            'consultar saldo',
            'depositar',
            'sacar',
            'sair'
        ],
    },]).then((answer)=>{
        const action = answer['action']
        console.log(action)
    }).catch( err => console.log(err) )
}