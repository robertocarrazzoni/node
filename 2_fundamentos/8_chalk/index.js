const chalk = require('chalk')

const nota = 6

if (nota >= 7 ) {
    console.log(chalk.green.bold('parabens você está arpovado!'))
} else {
    console.log(chalk.bgRed('Você está de recuperação'))
}