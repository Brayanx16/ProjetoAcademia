let express = require('express'),
    bodyParser = require('body-parser'),
    expressLayouts = require('express-ejs-layouts'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    app = express();
    

//importando as rotas 
const routesP = require('./app/routes/routesP');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(morgan('dev'));
app.use(expressLayouts)
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'academia_database'
}));

app.use('/', routesP);
 
app.listen(app.get('port'), () => {
    console.log(`Servidor Rodando na ${app.get('port')}`)
});