const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', './server/views')
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

module.exports = () =>{
    return app;
};
