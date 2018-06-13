let app = require('./config/express')();

app.listen(3000, () => {
    console.log('Servidor Rodando na Porta 3000')
});