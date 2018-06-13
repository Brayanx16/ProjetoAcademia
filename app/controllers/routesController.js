const controller = {};

controller.list = (req, res) => {
  req.getConnection((erro, conn) => {
    conn.query('select * from cliente', (erros, admin) => {
     res.render('admin/list', {data: admin});
    });
  });
};

controller.add = (req, res) => {
  const data = req.body;

  req.getConnection((err, connection) => {
    const query = connection.query('insert into cliente set ?', data, (erros, customer) => {
      res.redirect('/list');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  
  req.getConnection((err, conn) => {
    conn.query("select * from cliente where id = ?", [id], (err, rows) => {
      res.render('admin/edit', {
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
    res.redirect('/list');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('delete from cliente where id = ?', [id], (err, rows) => {
      res.redirect('/list');
    });
  });
}

module.exports = controller;
