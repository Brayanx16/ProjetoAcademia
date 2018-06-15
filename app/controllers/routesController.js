const controller = {};

// Rotas de Cadastro de Administrador 
controller.login = (req, res) => {
  let email = req.body.email,
      senha = req.body.senha;
  req.getConnection((erro, conn) => {
    conn.query('select email, senha from admin', (erros, rows) => {
    let emailBanco = rows[0].email,
        senhaBanco = rows[0].senha;
      if (emailBanco == email && senhaBanco == senha) {
        req.getConnection((erros, conn) => {
          conn.query('select * from cliente', (erros, admin) => {
           res.render('cliente/listCli', {data: admin});
          });
        });
      }else{
        res.redirect('/login')
      }
    })
  })
};

controller.list = (req, res) => {
  req.getConnection((erro, conn) => {
    conn.query('select * from cliente', (erros, admin) => {
      res.render('cliente/listCli', {data: admin});
    })
  })
}

controller.add = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('insert into cliente set ?', data, (erros, customer) => {
      res.redirect('cliente/listCli');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  
  req.getConnection((err, conn) => {
    conn.query("select * from cliente where id = ?", [id], (err, rows) => {
      res.render('cliente/editCli', {
        data: rows[0]
        
      })
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
}
// Rotas de Cadastro de Administrador 

controller.listAdmin = (req, res) => {
  const data = req.body;
  
  req.getConnection((erro, conn) => {
    conn.query('select * from admin', (erros, admin) => {
      res.render('admin/listAdmin', {data: admin});
    });
  });
};

controller.addAdmin = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('insert into admin set ?', data, (erros, customer) => {
      res.redirect('/admin/listAdmin');
    })
  })
};

controller.editAdmin = (req, res) => {
  const { idadmin } = req.params;
  
  req.getConnection((err, conn) => {
    conn.query("select * from admin where idadmin = ?", [idadmin], (err, rows) => {
      res.render('admin/editAdmin', {
        data: rows[0]
      })
    });
  });
};

controller.updateAdmin = (req, res) => {
  const { idadmin } = req.params;
  const newCustomer = req.body;
  
  req.getConnection((err, conn) => {

  conn.query('update admin set ? where idadmin = ?', [newCustomer, idadmin], (err, rows) => {
    res.redirect('/admin/listAdmin');
  });
  });
};

controller.deleteAdmin = (req, res) => {
  const { idadmin } = req.params;
  req.getConnection((err, connection) => {
    connection.query('delete from admin where idadmin = ?', [idadmin], (err, rows) => {
      res.redirect('/admin/listAdmin');
    });
  });
}



module.exports = controller;
