const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name: "nome",
    message: "Qual o seu nome?",
},{
    name: "idade",
    message: "Qual a sua idade?",
}])
.then(
    (answers) => {

        if (!answers.nome || !answers.idade) {
            throw new Error('Preencha os campos corretamente')
        }

        console.log(chalk.bgYellow.black(`Meu nome é ${answers.nome} e minha idade é ${answers.idade}`))
    }  
)
