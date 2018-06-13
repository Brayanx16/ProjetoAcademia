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
    router.get('/cadastroCli', (req, res) => { res.render('admin/cadastroCli') });
    //---------------------------------------------------------------------------------------------
    router.get('/list', routesController.list)
    //---------------------------------------------------------------------------------------------
    router.post('/add', routesController.add)
    //---------------------------------------------------------------------------------------------
    router.get('/update/:id', routesController.edit);
    //---------------------------------------------------------------------------------------------
    router.post('/update/:id', routesController.update);
    //---------------------------------------------------------------------------------------------
    router.get('/delete/:id', routesController.delete);

module.exports = router;
