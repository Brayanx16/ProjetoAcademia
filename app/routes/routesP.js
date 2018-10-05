const router = require('express').Router();
const routesController = require('../controllers/routesController');

//Rodas da Pagina------------------------------------------------------------------------------
router.get('/', (req, res) => { res.render('pages/home') });
//---------------------------------------------------------------------------------------------
router.get('/planos', (req, res) => { res.render('pages/planos') });
//---------------------------------------------------------------------------------------------


//Rota LoginUsuario----------------------------------------------------------------------------
router.post('/usuario/listUse/', routesController.loginUsuario);
//Rota LoginTreinador--------------------------------------------------------------------------
router.post('/treinador/listCli/', routesController.loginTrei);
//Rota LoginErro-------------------------------------------------------------------------------
router.get('/loginErro', (req, res) => { res.render('pages/loginErro') });



//Rotas Usuario -------------------------------------------------------------------------------
router.get('/loginUsuario', (req, res) => { res.render('pages/loginUsuario') });
//---------------------------------------------------------------------------------------------
router.get('/usuario/listUse', routesController.listUsuario);
//---------------------------------------------------------------------------------------------
router.post('/add/usuario', routesController.addUsuario);
//---------------------------------------------------------------------------------------------
router.get('/usuario/cadastroUse', (req, res) => { res.render('usuario/cadastroUse') });
//---------------------------------------------------------------------------------------------
router.get('/update/usuario/:idUsuario', routesController.editUsuario);
//---------------------------------------------------------------------------------------------
router.post('/update/usuario/:idUsuario', routesController.updateUsuario);
//---------------------------------------------------------------------------------------------
router.get('/delete/usuario/:idUsuario', routesController.deleteUsuario);
//---------------------------------------------------------------------------------------------


//Rotas Cliente--------------------------------------------------------------------------------
router.get('/cliente/listCli', routesController.listCliente);
//---------------------------------------------------------------------------------------------
router.post('/add/cliente', routesController.addCliente);
//---------------------------------------------------------------------------------------------
router.get('/cliente/cadastroCli', (req, res) => { res.render('cliente/cadastroCli') });
//---------------------------------------------------------------------------------------------
router.get('/update/cliente/:idCliente', routesController.editCliente);
//---------------------------------------------------------------------------------------------
router.post('/update/cliente/:idCliente', routesController.updateCliente);
//---------------------------------------------------------------------------------------------
router.get('/delete/cliente/:idCliente', routesController.deleteCliente);
//---------------------------------------------------------------------------------------------


//Rotas Treinador -----------------------------------------------------------------------------
router.get('/treinador/listTrei', routesController.listTreinador);
//---------------------------------------------------------------------------------------------
router.get('/treinador/cadastroTrei', (req, res) => { res.render('treinador/cadastroTrei') });
//---------------------------------------------------------------------------------------------
router.post('/add/treinador', routesController.addTreinador);
//---------------------------------------------------------------------------------------------
router.get('/update/treinador/:idtreinador', routesController.editTreinador);
//---------------------------------------------------------------------------------------------
router.post('/update/treinador/:idtreinador', routesController.updateTreinador);
//---------------------------------------------------------------------------------------------
router.get('/delete/treinador/:idtreinador', routesController.deleteTreinador);
//---------------------------------------------------------------------------------------------
router.get('/loginTrei', (req, res) => { res.render('pages/loginTrei') });
//---------------------------------------------------------------------------------------------
router.get('/updateCli/treinador/:idCliente', routesController.editCliTreinador);
//---------------------------------------------------------------------------------------------
router.post('/updateCli/treinador/:idCliente', routesController.updateCliTreinador);
//---------------------------------------------------------------------------------------------
router.get('/treinador/listCli/', routesController.listClienteTrei);


//Rotas Relatorios-----------------------------------------------------------------------------
router.get('/relatorios/listCli/', routesController.listCliRelatorios);
//---------------------------------------------------------------------------------------------
router.get('/update/relatorios/:idCliente', routesController.updateRelatorio);
//---------------------------------------------------------------------------------------------
router.get('/relatorios/financas', routesController.listFinancas);
//---------------------------------------------------------------------------------------------
router.post('/add/financas', routesController.addRetirada);
//---------------------------------------------------------------------------------------------
router.get('/relatorios/moviment', routesController.listMoviment);
//---------------------------------------------------------------------------------------------
router.get('/update/relatorios/moviment/:idlog', routesController.cancelarMovimento);
//---------------------------------------------------------------------------------------------


module.exports = router;
