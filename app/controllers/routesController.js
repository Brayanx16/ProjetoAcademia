const controller = {};

// Rota de Login Usuario
controller.loginUsuario = (req, res) => {
  const email = req.body.email,
        senha = req.body.senha;
  req.getConnection((erro, conn) => {
    conn.query('select * from usuario where email = ? and senha = ?', [email, senha], (erro, results) => {
      if(results == ""){  
        res.redirect('/loginUsuario')
      }else {
        console.log(results);

        req.getConnection((erros, conn) => {
          conn.query('select * from usuario', (erros, admin) => {
           res.render('usuario/listUse', {data: admin});

          });
        });
      }
    });
  });
};
// Rota de Login Treinador
controller.loginTrei = (req, res) => {
  const email = req.body.email,
        senha = req.body.senha;
  req.getConnection((erro, conn) => {
    conn.query('select * from treinador where email = ? and senha = ?', [email, senha], (erro, results) => {
      if(results == ""){  
        res.redirect('/loginTrei')
      }else {
        req.getConnection((erros, conn) => {
          conn.query('select * from cliente', (erros, admin) => {
           res.render('treinador/listCli', {data: admin});

          });
        });
      }
    });
  });
};


//Rotas do Usuario
controller.listUsuario = (req, res) => {
  req.getConnection((erro, conn) => {
    conn.query('select * from usuario', (erros, admin) => {
      res.render('usuario/listUse', {data: admin});
      
    });
  });
};

controller.addUsuario = (req, res) => {
  const data = req.body;
  console.log(data);
  
  req.getConnection((err, connection) => {
    const query = connection.query('insert into usuario set ?', data, (erros, customer) => {
      res.redirect('/usuario/listUse');
    });
  });
};

controller.editUsuario = (req, res) => {
  const { idUsuario } = req.params;
  
  req.getConnection((err, conn) => {
    conn.query("select * from usuario where idUsuario = ?", [idUsuario], (err, rows) => {
      res.render('usuario/editUse', {
        data: rows[0]
        
      });
    });
  });
};

controller.updateUsuario = (req, res) => {
  const { idUsuario } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('update usuario set ? where idUsuario = ?', [newCustomer, idUsuario], (err, rows) => {
    res.redirect('/usuario/listUse');
  });
  });
};

controller.deleteUsuario = (req, res) => {
  const { idUsuario } = req.params;
  req.getConnection((err, connection) => {
    connection.query('delete from usuario where idUsuario = ?', [idUsuario], (err, rows) => {
      res.redirect('/usuario/listUse');
    });
  });
};

// Rodas do Cliente
controller.listCliente = (req, res) => {
  req.getConnection((erro, conn) => {
    
    conn.query('select * from cliente', (erros, admin) => {
      res.render('cliente/listCli', {data: admin});
    });
  });
};

controller.addCliente = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    if(req.body.plano == 'Básico'){
        connection.query('insert into cliente (nome, idade, rg, cpf, email, telefone, sexo, cep, estado, cidade, bairro, senha, plano, valor, dataC, dataR, dataN) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 30.00, CURDATE(), CURDATE(), ?)'
        , [data.nome, data.idade, data.rg, data.cpf, data.email, data.telefone, data.sexo, data.cep, data.estado, data.cidade, data.bairro, data.senha, data.plano, data.dataN] , (err, customer) => {
          
         res.redirect('/cliente/listCli');
       });
    }else if(req.body.plano == 'Intermediário'){
        connection.query('insert into cliente (nome, idade, rg, cpf, email, telefone, sexo, cep, estado, cidade, bairro, senha, plano, valor, dataC, dataR, dataN) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 50.00, CURDATE(), CURDATE(), ?)'
          , [data.nome, data.idade, data.rg, data.cpf, data.email, data.telefone, data.sexo, data.cep, data.estado, data.cidade, data.bairro, data.senha, data.plano, data.dataN] , (err, customer) => {

           res.redirect('/cliente/listCli');
         });
    }else{
        connection.query('insert into cliente (nome, idade, rg, cpf, email, telefone, sexo, cep, estado, cidade, bairro, senha, plano, valor, dataC, dataR, dataN) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 80.00, CURDATE(), CURDATE(), ?)'
            , [data.nome, data.idade, data.rg, data.cpf, data.email, data.telefone, data.sexo, data.cep, data.estado, data.cidade, data.bairro, data.senha, data.plano, data.dataN] , (err, customer) => {

             res.redirect('/cliente/listCli');
           });
    }
  });
};

controller.editCliente = (req, res) => {
  const { idCliente } = req.params;
  
  req.getConnection((err, conn) => {
    conn.query("select * from cliente where idCliente = ?", [idCliente], (err, rows) => {
      res.render('cliente/editCli', {
        data: rows[0]
        
      });
    });
  });
};

controller.updateCliente = (req, res) => {
  const { idCliente } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('update cliente set ? where idCliente = ?', [newCustomer, idCliente], (err, rows) => {
    res.redirect('/cliente/listCli');
  });
  });
};

controller.deleteCliente = (req, res) => {
  const { idCliente } = req.params;
  req.getConnection((err, connection) => {
    connection.query('delete from cliente where idCliente = ?', [idCliente], (err, rows) => {
      res.redirect('/cliente/listCli');
    });
  });
};


//Rotas Treinador
controller.listTreinador = (req, res) => {
  req.getConnection((erro, conn) => {
    conn.query('select * from treinador', (erros, admin) => {
      res.render('treinador/listTrei', {data: admin});
    });
  });
};

controller.addTreinador = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('insert into treinador set ?', data, (erros, customer) => {
      res.redirect('/treinador/listTrei');
    });
  });
};

controller.editTreinador = (req, res) => {
  const { idtreinador } = req.params;
  
  req.getConnection((err, conn) => {
    conn.query("select * from treinador where idtreinador = ?", [idtreinador], (err, rows) => {
      res.render('treinador/editTrei', {
        data: rows[0]
        
      });
    });
  });
}; 

controller.updateTreinador = (req, res) => {
  const { idtreinador } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('update treinador set ? where idtreinador = ?', [newCustomer, idtreinador], (err, rows) => {
    res.redirect('/treinador/listTrei');
  });
  });
};

controller.deleteTreinador = (req, res) => {
  const { idtreinador } = req.params;
  req.getConnection((err, connection) => {
    connection.query('delete from treinador where idtreinador = ?', [idtreinador], (err, rows) => {
      res.redirect('/treinador/listTrei');
    });
  });
};

//Rotas Relatorios

controller.listCliRelatorios = (req, res) => {
  req.getConnection((erro, conn) => {
    conn.query('select idCliente, nome, idade, rg, cpf, email, telefone, sexo, cep, estado, cidade, bairro, senha, plano, valor, dataC, date_format(dataR, "%d/%m/%Y") as dataR , dataN from cliente', (erros, admin) => {

      res.render('relatorios/listCli', {data: admin});
    });
  });
};

controller.updateRelatorio = (req, res) => {
  const { idCliente } = req.params;
  req.getConnection((err, connection) => {
    connection.query('select dataR from cliente where idCliente = ?', [idCliente], (err, rows) => {
      if(rows == ''){
        console.log(err);
      }else{
        connection.query('update cliente set dataR = curdate() where idCliente = ?', [idCliente], (err, rows) => {
          res.redirect('/relatorios/listCli')
        })
      }
    });
  });
};

controller.listFinancas = (req, res) => {
  req.getConnection((erro, conn) => {
    conn.query('select sum(valor) as valorTotal from cliente', (erros, admin) => {
      let somaValor = admin[0].valorTotal;
      
      res.render('relatorios/financas', {data: somaValor});
    });
    
  });
}



module.exports = controller;
