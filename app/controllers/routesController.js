const controller = {};

// Rota de Login
controller.login = (req, res) => {
  const email = req.body.email,
        senha = req.body.senha;
  req.getConnection((erro, conn) => {
    conn.query('select * from admin where email = ? and senha = ?', [email, senha], (erro, results) => {
      if(results == ""){  
        res.redirect('/login')
      }else {
        req.getConnection((erros, conn) => {
          conn.query('select * from cliente', (erros, admin) => {
           res.render('cliente/listCli', {data: admin});

          });
        });
      }
    });
  });
};

controller.loginUsuario = (req, res) => {
  const email = req.body.email,
        senha = req.body.senha;
  req.getConnection((erro, conn) => {
    conn.query('select * from usuario where email = ? and senha = ?', [email, senha], (erro, results) => {
      if(results == ""){  
        res.redirect('/loginUsuario')
      }else {
        req.getConnection((erros, conn) => {
          conn.query('select * from cliente', (erros, admin) => {
           res.render('usuario/listCli', {data: admin});

          });
        });
      }
    });
  });
};

// Rodas do Cliente
controller.list = (req, res) => {
  req.getConnection((erro, conn) => {
    conn.query('select * from cliente', (erros, admin) => {
      res.render('cliente/listCli', {data: admin});
    });
  });
};

controller.add = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('insert into cliente set ?', data, (erros, customer) => {
      res.redirect('cliente/listCli');
    });
  });
};

controller.edit = (req, res) => {
  const { id } = req.params;
  
  req.getConnection((err, conn) => {
    conn.query("select * from cliente where id = ?", [id], (err, rows) => {
      res.render('cliente/editCli', {
        data: rows[0]
        
      });
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('update cliente set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/cliente/listCli');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('delete from cliente where id = ?', [id], (err, rows) => {
      res.redirect('/cliente/listCli');
    });
  });
};

// Rotas do Administrador 
controller.listAdmin = (req, res) => {
  const data = req.body;
  
  req.getConnection((erro, conn) => {
    conn.query('select * from usuario', (erros, admin) => {
      res.render('admin/listAdmin', {data: admin});
    });
  });
};

controller.addAdmin = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('insert into usuario set ?', data, (erros, customer) => {
      res.redirect('/admin/listAdmin');
    });
  });
};

controller.editAdmin = (req, res) => {
  const { idUsuario } = req.params;
  
  req.getConnection((err, conn) => {
    conn.query("select * from usuario where idUsuario = ?", [idUsuario], (err, rows) => {
      res.render('admin/editAdmin', {
        data: rows[0]
      });
    });
  });
};

controller.updateAdmin = (req, res) => {
  const { idUsuario } = req.params;
  const newCustomer = req.body;
  
  req.getConnection((err, conn) => {

  conn.query('update usuario set ? where idUsuario = ?', [newCustomer, idUsuario], (err, rows) => {
      res.redirect('/admin/listAdmin');
    });
  });
};

controller.deleteAdmin = (req, res) => {
  const { idUsuario } = req.params;
  req.getConnection((err, connection) => {
    connection.query('delete from usuario where idUsuario = ?', [idUsuario], (err, rows) => {
      res.redirect('/admin/listAdmin');
    });
  });
};

//Rotas do Usuario
controller.listUsuario = (req, res) => {
  req.getConnection((erro, conn) => {
    conn.query('select * from cliente', (erros, admin) => {
      res.render('usuario/listCli', {data: admin});
    });
  });
};

controller.addUsuario = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('insert into funcionario set ?', data, (erros, customer) => {
      res.redirect('/usuario/listCli');
    });
  });
};

controller.editUsuario = (req, res) => {
  const { id } = req.params;
  
  req.getConnection((err, conn) => {
    conn.query("select * from cliente where id = ?", [id], (err, rows) => {
      res.render('usuario/editCli', {
        data: rows[0]
        
      });
    });
  });
};

controller.updateUsuario = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('update cliente set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/usuario/listCli');
  });
  });
};

controller.deleteUsuario = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('delete from cliente where id = ?', [id], (err, rows) => {
      res.redirect('/usuario/listCli');
    });
  });
};

//Rotas Funcionario
controller.listFun = (req, res) => {
  req.getConnection((erro, conn) => {
    conn.query('select * from funcionario', (erros, admin) => {
      res.render('funcionario/listFun', {data: admin});
    });
  });
};

controller.addFuncionario = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('insert into funcionario set ?', data, (erros, customer) => {
      res.redirect('/funcionario/listFun');
    });
  });
};

controller.editFuncionario = (req, res) => {
  const { idfuncionario } = req.params;
  
  req.getConnection((err, conn) => {
    conn.query("select * from funcionario where idfuncionario = ?", [idfuncionario], (err, rows) => {
      res.render('funcionario/editFun', {
        data: rows[0]
        
      });
    });
  });
}; 

controller.updateFuncionario = (req, res) => {
  const { idfuncionario } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('update funcionario set ? where idfuncionario = ?', [newCustomer, idfuncionario], (err, rows) => {
    res.redirect('/funcionario/listFun');
  });
  });
};

controller.deleteFuncionario = (req, res) => {
  const { idfuncionario } = req.params;
  req.getConnection((err, connection) => {
    connection.query('delete from funcionario where idfuncionario = ?', [idfuncionario], (err, rows) => {
      res.redirect('/funcionario/listFun');
    });
  });
};

module.exports = controller;
