const path = require('path')

// path absoluto
console.log(path.resolve('teste.txt'))

// formar path
const midFolder = 'oi'
const fileName = 'roberto'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)