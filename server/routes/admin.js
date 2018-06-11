
module.exports = (app) =>{

    app.get('/', (req, res) => {
        res.render('pages/home')
    });
    
    app.get('/contact', (req, res) => {
        res.render('pages/contact')
    });
    
    app.get('/login', (req, res) => {
        res.render('pages/login')
    });
    
    app.get('/modalidades', (req, res) => {
        res.render('pages/modalidades')
    });
    
    app.get('/planos', (req, res) => {
        res.render('pages/planos')
    });
    
    app.get('/recupera-senha', (req, res) => {
        res.render('pages/recupera-senha')
    });
    
    app.get('/cadastroCli', (req, res) => {
        res.render('admin/cadastroCli')
    });
    
    let = listaProdutos = (req, res) => {
        let connection = app.infra.connectionFactory();
        let clientesBanco = new app.infra.clientesBanco(connection);

        clientesBanco.lista((erros, resultados) => {
            res.render('admin/list', {lista: resultados});
        });
        connection.end();
    };

    app.get('/list', listaProdutos);

    app.post('/admin', (req, res) => {
        let cliente = req.body;
        
        let connection = app.infra.connectionFactory();
        let clientesBanco = new app.infra.clientesBanco(connection);
        
        clientesBanco.salva(cliente, (erros, resultados) => {
            res.redirect('/list')
        });
    });

    app.delete('/admin/:id', (req, res, next) => {
        let id = req.params.id;

        let connection = app.infra.connectionFactory();
        let clientesBanco = new app.infra.clientesBanco(connection);

        clientesBanco.delete(id, (erros, resultados) =>{
            console.log(erros);
                res.redirect('/list')
        });
    });
    
    app.get('/user', (req, res) => {
        res.render('admin/user')
    });
    
    /*app.get('/about', (req, res) => {
        res.render('pages/about')
    });*/

}
