const router = require('express').Router();
const routesController = require('../controllers/routesController');

    //Rodas da Pagina------------------------------------------------------------------------------
    router.get('/', (req, res) => { res.render('pages/home') });
    //---------------------------------------------------------------------------------------------
    router.get('/planos', (req, res) => { res.render('pages/planos') });


    //Rotas Cliente--------------------------------------------------------------------------------
    router.get('/admin/homeAdmin', (req, res) => { res.render('admin/homeAdmin') })
    //---------------------------------------------------------------------------------------------
    router.get('/cliente/listCli', routesController.list);
    //---------------------------------------------------------------------------------------------
    router.post('/add', routesController.add);
    //---------------------------------------------------------------------------------------------
    router.get('/cliente/cadastroCli', (req, res) => { res.render('cliente/cadastroCli') });
    //---------------------------------------------------------------------------------------------
    router.get('/update/:id', routesController.edit);
    //---------------------------------------------------------------------------------------------
    router.post('/update/:id', routesController.update);
    //---------------------------------------------------------------------------------------------
    router.get('/delete/:id', routesController.delete);


    //Rotas Admin ---------------------------------------------------------------------------------
    router.get('/admin/listAdmin', routesController.listAdmin);
    //---------------------------------------------------------------------------------------------
    router.post('/add/admin', routesController.addAdmin);
    //---------------------------------------------------------------------------------------------
    router.get('/admin/cadastroAdmin', (req, res) => { res.render('admin/cadastroAdmin') });
    //---------------------------------------------------------------------------------------------
    router.get('/update/admin/:idUsuario', routesController.editAdmin);
    //---------------------------------------------------------------------------------------------
    router.post('/update/admin/:idUsuario', routesController.updateAdmin);
    //---------------------------------------------------------------------------------------------
    router.get('/delete/admin/:idUsuario', routesController.deleteAdmin);
    //---------------------------------------------------------------------------------------------
    router.get('/admin/relatorios', (req, res) => {res.render('admin/relatorios') });
    //---------------------------------------------------------------------------------------------
    router.get('/login', (req, res) => { res.render('pages/login') });


    //Rotas Usuario -------------------------------------------------------------------------------
    router.get('/usuario/listCli', routesController.listUsuario);
    //---------------------------------------------------------------------------------------------
    router.get('/usuario/cadastroCli', (req, res) => { res.render('usuario/cadastroCli') });
    //---------------------------------------------------------------------------------------------
    router.post('/add/usuario', routesController.addUsuario);
    //---------------------------------------------------------------------------------------------
    router.get('/update/usuario/:id', routesController.editUsuario);
    //---------------------------------------------------------------------------------------------
    router.post('/update/usuario/:id', routesController.updateUsuario);
    //---------------------------------------------------------------------------------------------
    router.get('/delete/usuario/:id', routesController.deleteUsuario);
    //---------------------------------------------------------------------------------------------
    router.get('/usuario/relatorios', (req, res) => {res.render('usuario/relatorios') });
    //---------------------------------------------------------------------------------------------
    router.get('/loginUsuario', (req, res) => { res.render('pages/loginUsuario') });


    //Rotas Treinador -----------------------------------------------------------------------------
    router.get('/funcionario/listFun', routesController.listFun);
    //---------------------------------------------------------------------------------------------
    router.get('/funcionario/cadastroFun', (req, res) => { res.render('funcionario/cadastroFun') });
    //---------------------------------------------------------------------------------------------
    router.post('/add/funcionario', routesController.addFuncionario);
    //---------------------------------------------------------------------------------------------
    router.get('/update/funcionario/:idfuncionario', routesController.editFuncionario);
    //---------------------------------------------------------------------------------------------
    router.post('/update/funcionario/:idfuncionario', routesController.updateFuncionario);
    //---------------------------------------------------------------------------------------------
    router.get('/delete/funcionario/:idfuncionario', routesController.deleteFuncionario);
    //---------------------------------------------------------------------------------------------
    router.get('/loginTrei', (req, res) => { res.render('pages/loginTrei') });


    //Rota Login-----------------------------------------------------------------------------------
    router.post('/cliente/listCli/', routesController.login);
    //Rota LoginUsuario----------------------------------------------------------------------------
    router.post('/usuario/listCli/', routesController.loginUsuario);
    //Rota LoginTreinador--------------------------------------------------------------------------
    //router.post('/usuario/listCli/', routesController.loginUsuario);

module.exports = router;
