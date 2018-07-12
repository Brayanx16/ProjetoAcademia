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
  
  req.getConnection((err, conn) => {
    conn.query('insert into usuario set ?', data, (erros, customer) => {
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
  req.getConnection((err, conn) => {
    conn.query('delete from usuario where idUsuario = ?', [idUsuario], (err, rows) => {
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
  req.getConnection((err, conn) => {
    if(req.body.plano == 'Básico'){
        conn.query('insert into cliente (nome, idade, rg, cpf, email, telefone, sexo, cep, estado, cidade, bairro, senha, plano, valor, dataC, dataR, dataN) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 30.00, CURDATE(), CURDATE(), ?)'
        , [data.nome, data.idade, data.rg, data.cpf, data.email, data.telefone, data.sexo, data.cep, data.estado, data.cidade, data.bairro, data.senha, data.plano, data.dataN] , (err, customer) => {
          
         res.redirect('/cliente/listCli');
       });
    }else if(req.body.plano == 'Intermediário'){
        conn.query('insert into cliente (nome, idade, rg, cpf, email, telefone, sexo, cep, estado, cidade, bairro, senha, plano, valor, dataC, dataR, dataN) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 50.00, CURDATE(), CURDATE(), ?)'
          , [data.nome, data.idade, data.rg, data.cpf, data.email, data.telefone, data.sexo, data.cep, data.estado, data.cidade, data.bairro, data.senha, data.plano, data.dataN] , (err, customer) => {

           res.redirect('/cliente/listCli');
         });
    }else{
        conn.query('insert into cliente (nome, idade, rg, cpf, email, telefone, sexo, cep, estado, cidade, bairro, senha, plano, valor, dataC, dataR, dataN) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 80.00, CURDATE(), CURDATE(), ?)'
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
  req.getConnection((err, conn) => {
    conn.query('delete from cliente where idCliente = ?', [idCliente], (err, rows) => {
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
  req.getConnection((err, conn) => {
    conn.query('insert into treinador set ?', data, (err, rows) => {
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
  req.getConnection((err, conn) => {
    conn.query('delete from treinador where idtreinador = ?', [idtreinador], (err, rows) => {
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
  req.getConnection((err, conn) => {
    conn.query('select idCliente, nome, dataR, plano, valor from cliente where idCliente = ?', [idCliente], (err, rows) => {
      const valor = rows[0].valor;
        conn.query('insert into log (destino, valor, tipo, data) values (?, ?, "Cliente", NOW())', [rows[0].nome, rows[0].valor], (err, rows)=> {

        });
      if(rows == ''){
        console.log(err);
      }else{
        conn.query('update cliente set dataR = curdate() where idCliente = ?', [idCliente], (err, rows) => {
            res.redirect('/relatorios/listCli')
          })
      }
    });
  });
};

//Rotas Finanças
controller.listFinancas = (req, res) => {
  let data = new Date();
  let dataMes = data.getMonth()+1;
  //Somando os valores da tabela cliente
  req.getConnection((err, conn) => {
    conn.query("select sum(valor) as somaSaldo from cliente where cast(DataR as char) like '%-0?-%'", [dataMes], (err, admin) => {
      let somaSaldo = 0;
      somaSaldo = admin[0].somaSaldo;
        //Somando os valores de Saida e Diminuindo com o valor Total
        conn.query("select sum(valor) as somaSaida from log where tipo like '%Saída%'", (err, admin) => {
          let somaSaida = admin[0].somaSaida;
          let somaTotal = somaSaldo - somaSaida;
            //Somando os valores de Entrada e Somando com o valo Total
            conn.query("select sum(valor) as somaEntrada from log where tipo like '%Entrada%'", (err, admin) => {
              let somaEntrada = admin[0].somaEntrada;
              somaTotal = somaTotal + somaEntrada;
              //Fazendo o udpdate no Saldo
              conn.query('update financas set saldo = ? where idfinancas = 1', [somaTotal], (err, admin) => {
                //Trazendo o Saldo e armazenando na variavel saldo
                conn.query('select * from financas', (err, admin) => {
                  let saldo = admin[0].saldo;
                  res.render('relatorios/financas', {data: admin});
            });
          });
        });
      });
    });
  });
}

controller.updateFinancas = (req, res) => {
  const newCustomer = Number(req.body.saldo);
  console.log(newCustomer);
  req.getConnection((err, conn) => {
    conn.query('update financas set saldo = saldo - ? where idfinancas = 1', [newCustomer], (err, rows) => {
      
      res.redirect('/relatorios/financas');
    })
  })
}

controller.addRetirada = (req, res) => {
  const values = req.body;
  const tipo = req.body.tipo;
  const valor = req.body.valor;

  req.getConnection((err, conn) => {
      conn.query('insert into log (destino, valor, tipo, data) VALUES (?, ?, ?, NOW() )', 
      [values.destino, values.valor, values.tipo], (err, rows) => {
        res.redirect('/relatorios/financas')
      })
  });
}


controller.listMoviment = (req, res) => {
  req.getConnection((err, conn) => {
      conn.query('select idlog, destino, valor, tipo, DATE_FORMAT(data, "%d/%m/%Y %H:%i:%S") as data from log', (err, rows) => {
        res.render('relatorios/moviment', {data: rows})
        
      })
  });
}

module.exports = controller;