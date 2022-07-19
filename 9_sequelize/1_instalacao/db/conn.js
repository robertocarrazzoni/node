const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root',  '12345',
{
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('conectamos com sucesso com o sequelize')
} catch (error) {
    console.log('Não foi possivel conectar')
}

module.exports = sequelize