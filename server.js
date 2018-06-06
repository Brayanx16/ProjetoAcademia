const app = require('./config/express')();

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor Rodando na Porta ${port}`)
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

app.post('/contact', (req, res) => {
    res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
})