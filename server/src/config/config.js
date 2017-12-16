const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'pharmaDb',
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASS || 'sa',
    options: {
      dialect: process.env.DIALECT || 'mssql',
      host: process.env.HOST || 'jaychand-pc',
      storage: './tabtracker.mssql'
    }
  }
}