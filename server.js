const app = require('./config/express')();

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Essa porra esta funcionando em http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/about', (req, res) => {
    var users = [{
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/300/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/400/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/500/300'
    }]

    res.render('pages/about', {
        usuarios: users
    })
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
    res.render('pages/admin')
})
app.get('/user', (req, res) => {
    res.render('pages/user')
})
app.post('/contact', (req, res) => {
    res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
})