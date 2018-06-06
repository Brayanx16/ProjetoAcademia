const express = require('express')
const faker = require('faker')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')     // Setamos que nossa engine será o ejs
//app.use(expressLayouts)           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded())  // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.get('/index', (req, res) => {
    res.render('home/index.ejs');
});
app.get('/login', (req, res) => {
    res.render('home/login.ejs');
});
app.get('/modalidades', (req, res) => {
    res.render('home/modalidades.ejs');
});
app.get('/planos', (req, res) => {
    res.render('home/planos.ejs');
});
app.get('/contatos', (req, res) => {
    res.render('home/contatos.ejs');
});
app.use(express.static(__dirname + '/ProjetoAcademia'));
app.listen(port);
console.log('Servidor iniciado em http://localhost:' + port);


