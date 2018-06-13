function clientesBanco(connection) {
    this.connection = connection;
    
    clientesBanco.prototype.lista = (callback) => {
        connection.query('select * from cliente', callback);
    }

    clientesBanco.prototype.salva = (cliente, callback) => {
        connection.query ('insert into cliente (nome, cpf, telefone, email, sexo, cep, bairro, cidade, estado, senha, plano) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [cliente.nome, cliente.cpf, cliente.telefone, cliente.email, cliente.sexo, cliente.cep, cliente.bairro,
        cliente.cidade, cliente.estado, cliente.senha, cliente.plano], callback);
    }

    clientesBanco.prototype.delete = (cliente, callback) =>{
        connection.query ('delete from cliente where id = ?', [id], cliente, callback)
    }

}

module.exports = () => {
    return clientesBanco;
}