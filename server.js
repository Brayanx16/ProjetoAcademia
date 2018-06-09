const app = require('./config/express')();
const rotasAdmin = require('./server/routes/admin')(app);
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Servidor Rodando na Porta ${port}`)
})