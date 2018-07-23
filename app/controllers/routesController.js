const controller = {};

// Rota de Login Usuario
controller.loginUsuario = (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;

  req.getConnection((err, conn) => {
    conn.query('select * from usuario where email = ? and senha = ?', [email, senha], (err, results) => {
      if(results == ""){

        res.redirect('/loginErro');
      }else {

        res.redirect('/usuario/listUse')
      }
    });
  });
};

// Rota de Login Treinador
controller.loginTrei = (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;

  req.getConnection((err, conn) => {
    conn.query('select * from treinador where email = ? and senha = ?', [email, senha], (err, results) => {
      if(results == ""){  
        
        res.redirect('/loginTrei')
      }else {
        conn.query('select * from cliente', (err, results) => {
          res.render('treinador/listCli', {data: results});
        })
      }
    });
  });
};

//Rotas do Usuario
controller.listUsuario = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('select * from usuario', (err, results) => {
      
      res.render('usuario/listUse', {data: results});
    });
  });
};

controller.addUsuario = (req, res) => {
  const data = req.body;
  
  req.getConnection((err, conn) => {
    conn.query('insert into usuario set ?', [data], (err, results) => {

      res.redirect('/usuario/listUse');
    });
  });
};

controller.editUsuario = (req, res) => {
  const { idUsuario } = req.params;

  req.getConnection((err, conn) => {
    conn.query("select * from usuario where idUsuario = ?", [idUsuario], (err, results) => {
      res.render('usuario/editUse', {
        data: results[0]
      });
    });
  });
};

controller.updateUsuario = (req, res) => {
  const { idUsuario } = req.params;
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('update usuario set ? where idUsuario = ?', [data, idUsuario], (err, results) => {
      res.redirect('/usuario/listUse');
    });
  });
};

controller.deleteUsuario = (req, res) => {
  const { idUsuario } = req.params;

  req.getConnection((err, conn) => {
    conn.query('delete from usuario where idUsuario = ?', [idUsuario], (err, results) => {
      res.redirect('/usuario/listUse');
    });
  });
};

// Rodas do Cliente
controller.listCliente = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('select * from cliente', (err, results) => {
      res.render('cliente/listCli', {data: results});
    });
  });
};

controller.addCliente = (req, res) => {
  const data = req.body;
  
  req.getConnection((err, conn) => {
    if(req.body.plano == 'Básico'){
        conn.query('insert into cliente (nome, idade, rg, cpf, email, telefone, sexo, cep, estado, cidade, bairro, senha, plano, valor, dataC, dataR, dataN) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 30.00, CURDATE(), CURDATE(), ?)'
        , [data.nome, data.idade, data.rg, data.cpf, data.email, data.telefone, data.sexo, data.cep, data.estado, data.cidade, data.bairro, data.senha, data.plano, data.dataN] , (err, results) => {
          
         res.redirect('/cliente/listCli');
       });
    }else if(req.body.plano == 'Intermediário'){
        conn.query('insert into cliente (nome, idade, rg, cpf, email, telefone, sexo, cep, estado, cidade, bairro, senha, plano, valor, dataC, dataR, dataN) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 50.00, CURDATE(), CURDATE(), ?)'
          , [data.nome, data.idade, data.rg, data.cpf, data.email, data.telefone, data.sexo, data.cep, data.estado, data.cidade, data.bairro, data.senha, data.plano, data.dataN] , (err, results) => {

           res.redirect('/cliente/listCli');
         });
    }else{
        conn.query('insert into cliente (nome, idade, rg, cpf, email, telefone, sexo, cep, estado, cidade, bairro, senha, plano, valor, dataC, dataR, dataN) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 80.00, CURDATE(), CURDATE(), ?)'
            , [data.nome, data.idade, data.rg, data.cpf, data.email, data.telefone, data.sexo, data.cep, data.estado, data.cidade, data.bairro, data.senha, data.plano, data.dataN] , (err, results) => {

             res.redirect('/cliente/listCli');
           });
    }
  });
};

controller.editCliente = (req, res) => {
  const { idCliente } = req.params;
  
  req.getConnection((err, conn) => {
    conn.query("select * from cliente where idCliente = ?", [idCliente], (err, results) => {
      res.render('cliente/editCli', {data: results[0]});
    });
  });
};

controller.updateCliente = (req, res) => {
  const { idCliente } = req.params;
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('update cliente set ? where idCliente = ?', [data, idCliente], (err, results) => {
      res.redirect('/cliente/listCli');
    });
  });
};

controller.deleteCliente = (req, res) => {
  const { idCliente } = req.params;

  req.getConnection((err, conn) => {
    conn.query('delete from cliente where idCliente = ?', [idCliente], (err, results) => {
      res.redirect('/cliente/listCli');
    });
  });
};


//Rotas Treinador
controller.listTreinador = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('select * from treinador', (err, results) => {
      res.render('treinador/listTrei', {data: results});
    });
  });
};

controller.addTreinador = (req, res) => {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('insert into treinador set ?', data, (err, results) => {
      res.redirect('/treinador/listTrei');
    });
  });
};

controller.editTreinador = (req, res) => {
  const { idtreinador } = req.params;
  
  req.getConnection((err, conn) => {
    conn.query("select * from treinador where idtreinador = ?", [idtreinador], (err, results) => {
      res.render('treinador/editTrei', {data: results[0]});
    });
  });
}; 

controller.updateTreinador = (req, res) => {
  const { idtreinador } = req.params;
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('update treinador set ? where idtreinador = ?', [data, idtreinador], (err, results) => {
      res.redirect('/treinador/listTrei');
    });
  });
};

controller.deleteTreinador = (req, res) => {
  const { idtreinador } = req.params;

  req.getConnection((err, conn) => {
    conn.query('delete from treinador where idtreinador = ?', [idtreinador], (err, results) => {
      res.redirect('/treinador/listTrei');
    });
  });
};

//Rotas Relatorios
controller.listCliRelatorios = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('select idCliente, nome, idade, rg, cpf, email, telefone, sexo, cep, estado, cidade, bairro, senha, plano, valor, dataC, date_format(dataR, "%d/%m/%Y") as dataR , dataN from cliente', (erros, results) => {
      res.render('relatorios/listCli', {data: results});
    });
  });
};

controller.updateRelatorio = (req, res) => {
  const { idCliente } = req.params;

  req.getConnection((err, conn) => {
    conn.query('select idCliente, nome, dataR, plano, valor from cliente where idCliente = ?', [idCliente], (err, results) => {
      
      conn.query('insert into log (idlog, destino, valor, tipo, data) values (?, ?, ?, "Pagamento", NOW())', [results[0].idCliente, results[0].nome, results[0].valor], (err, results) => {
      
      });

      if(results == ''){
        console.log(err);
      }else{
        conn.query('update cliente set dataR = curdate() where idCliente = ?', [idCliente], (err, results) => {
            res.redirect('/relatorios/listCli')
        });
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
    conn.query("select sum(valor) as somaSaldo from cliente where cast(DataR as char) like '%-0?-%'", [dataMes], (err, results) => {
      let somaSaldo = 0;
      somaSaldo = results[0].somaSaldo;
        //Somando os valores de Saida e Diminuindo com o valor Total
        conn.query("select sum(valor) as somaSaida from log where tipo like '%Saída%'", (err, results) => {
          let somaSaida = results[0].somaSaida;
          let somaTotal = somaSaldo - somaSaida;
            //Somando os valores de Entrada e Somando com o valo Total
            conn.query("select sum(valor) as somaEntrada from log where tipo like '%Entrada%'", (err, results) => {
              let somaEntrada = results[0].somaEntrada;
              somaTotal = somaTotal + somaEntrada;
              //Fazendo o udpdate no Saldo
              conn.query('update financas set saldo = ? where idfinancas = 1', [somaTotal], (err, results) => {
                //Trazendo o Saldo e armazenando na variavel saldo
                conn.query('select * from financas', (err, results) => {
                  let saldo = results[0].saldo;
                  res.render('relatorios/financas', {data: results});
            });
          });
        });
      });
    });
  });
};

controller.updateFinancas = (req, res) => {
  const data = Number(req.body.saldo);

  req.getConnection((err, conn) => {
    conn.query('update financas set saldo = saldo - ? where idfinancas = 1', [data], (err, results) => {

      res.redirect('/relatorios/financas');
    });
  });
};

controller.addRetirada = (req, res) => {
  const values = req.body;
  const tipo = req.body.tipo;
  const valor = req.body.valor;

  req.getConnection((err, conn) => {
      conn.query('insert into log (destino, valor, tipo, data) VALUES (?, ?, ?, NOW() )', [values.destino, values.valor, values.tipo], (err, results) => {
        res.redirect('/relatorios/financas')
      });
  });
};

controller.listMoviment = (req, res) => {
  req.getConnection((err, conn) => {
      conn.query('select idlog, destino, valor, tipo, DATE_FORMAT(data, "%d/%m/%Y %H:%i:%S") as data from log', (err, results) => {
        res.render('relatorios/moviment', {data: results})
      });
  });
}

controller.cancelarMovimento = (req ,res) => {
  const { idlog } = req.params;
  let data = new Date()
  let dia = data.getDate();
  let mes = data.getMonth();
  let ano = data.getFullYear();
  let dataCompleta = ano+'-'+'0'+mes+'-'+dia; //Corrigir erro Stático da Data

  req.getConnection((err, conn) => {
    conn.query('select * from log where idlog = ?', [idlog], (err, results) => {
      if (results[0].tipo == 'Pagamento') {
        conn.query('update cliente set dataR = ? where idCliente = ?', [dataCompleta, idlog], (err, results)=> {
          conn.query('delete from log where idlog = ?', [idlog], (err, results) => {
            res.redirect('/relatorios/moviment')
          });
        });
      }else{
        conn.query('delete from log where idlog = ?', [idlog], (err, results) => {
          res.redirect('/relatorios/moviment')
        });
      }
    });
  });
};

module.exports = controller;