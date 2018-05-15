/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function (params) {
    console.log('Entrou na funcao de conexao')
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', // string de endereco do servidor
            27017, // porta de conexao
            {}
        ),
        {}
    );
    return db;
}

module.exports = function () {
    return connMongoDB;
}