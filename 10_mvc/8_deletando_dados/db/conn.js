const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('nodemvc', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
})
try {
  sequelize.authenticate()
  console.log(`Conectamos ao MySql!`)  
} catch (error) {
    console.log(`Não foi possivel conectar: ${error}`)
}

module.exports = sequelize