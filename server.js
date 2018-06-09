const app = require('./config/express')();
<<<<<<< HEAD
const rotasAdmin = require('./server/routes/admin')(app);
=======

<<<<<<< HEAD
const port = process.env.PORT || 5000
=======
>>>>>>> 82c26b8498f13f2477a38c42d75ae5790c1dc354
const port = process.env.PORT || 3000
>>>>>>> 4d5ee99418815156f1758df744d3033c38e4ccf7


app.listen(port, () => {
<<<<<<< HEAD
    console.log(`Servidor Rodando na Porta ${port}`)
=======
    console.log(`Servidor Rodando na Porta http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

app.get('/login', (req, res) => {
    res.render('pages/login')
})

app.get('/modalidades', (req, res) => {
    res.render('pages/modalidades')
})

app.get('/planos', (req, res) => {
    res.render('pages/planos')
})

app.get('/recupera-senha', (req, res) => {
    res.render('pages/recupera-senha')
})

app.get('/cadastro-cli', (req, res) => {
    res.render('pages/cadastro-cli')
})

app.get('/admin', (req, res) => {
    res.render('admin/admin')
})

app.get('/user', (req, res) => {
    res.render('cliente/user')
})
app.get('/about', (req, res) => {
    res.render('pages/about')
})
app.post('/contact', (req, res) => {
    res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
>>>>>>> 82c26b8498f13f2477a38c42d75ae5790c1dc354
})