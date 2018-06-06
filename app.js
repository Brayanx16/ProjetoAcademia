const express = require("express");
const app = express();

app.set('view engine', 'ejs');

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
app.listen(3000, () =>{
    console.log("Servidor Rodando");
});

