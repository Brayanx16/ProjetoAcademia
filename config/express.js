let express = require('express')
let bodyParser = require('body-parser')
let load = require('express-load')
let expressLayouts = require('express-ejs-layouts')

module.exports = () => {
    
    let app = express();

    app.set('view engine', 'ejs')
    app.set('views', './server/views')
    app.use(expressLayouts)
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static('public'))

    load('routes', {cwd: 'server'})
        .then('infra')
        .into(app);
 
    return app
};