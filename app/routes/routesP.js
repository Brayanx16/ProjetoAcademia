const router = require('express').Router();
const routesController = require('../controllers/routesController');

    router.get('/', (req, res) => { res.render('pages/home') });
    //---------------------------------------------------------------------------------------------
    router.get('/contact', (req, res) => { res.render('pages/contact') });
    //---------------------------------------------------------------------------------------------
    router.get('/login', (req, res) => { res.render('pages/login') });
    //---------------------------------------------------------------------------------------------
    router.get('/modalidades', (req, res) => { res.render('pages/modalidades') });
    //---------------------------------------------------------------------------------------------
    router.get('/planos', (req, res) => { res.render('pages/planos') });
    //---------------------------------------------------------------------------------------------
    router.get('/recupera-senha', (req, res) => { res.render('pages/recupera-senha') });
    //---------------------------------------------------------------------------------------------
    router.get('/cliente/cadastroCli', (req, res) => { res.render('cliente/cadastroCli') });
    //---------------------------------------------------------------------------------------------
    router.get('/admin/cadastroAdmin', (req, res) => { res.render('admin/cadastroAdmin') });
    //---------------------------------------------------------------------------------------------
    router.get('/cliente/listCli', routesController.list);
    //---------------------------------------------------------------------------------------------
    router.post('/add', routesController.add);
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
    router.get('/update/admin/:idadmin', routesController.editAdmin);
    //---------------------------------------------------------------------------------------------
    router.post('/update/admin/:idadmin', routesController.updateAdmin);

    router.get('/delete/admin/:idadmin', routesController.deleteAdmin);

module.exports = router;
