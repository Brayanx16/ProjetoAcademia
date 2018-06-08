const express = require('express')
const faker = require('faker')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const app = express()

app.set('view engine', 'ejs')     // Setamos que nossa engine será o ejs
app.use(expressLayouts)           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded())  // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use(express.static(__dirname + 'public'))

module.exports(() => {
     return app
});
