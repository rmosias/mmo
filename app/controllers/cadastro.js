module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', {validacao : {}, dadosForm: {}});
}
/*funcao de cadastro*/
module.exports.cadastrar = function (application, req, res) {
    /*recebendo dados de formulario*/
    var dadosForm = req.body;
    /*validando dados*/
    req.assert('nome','Nome não pode ser vazio ').notEmpty();
    req.assert('usuario','Usuario não pode ser vazio ').notEmpty();
    req.assert('senha','Senha não pode ser vazio ').notEmpty();
    req.assert('casa','Casa não pode ser vazio ').notEmpty();

    var errors =  req.validationErrors();

    if (errors) {
        res.render('cadastro',{validacao: errors, dadosForm: dadosForm});
        return;
    } 
    /*recuperando funcao de conexao com o banco de dados*/
    var connection = application.config.dbconnection;
    /*passando objeto para models*/
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    /*insercao de dados*/
    UsuariosDAO.inserirUsuario(dadosForm);
    
    var JogoDAO = new application.app.models.JogoDAO(connection);
    //geracao dos parametros
    JogoDAO.gerarParametros(dadosForm.usuario);

    res.send('podemos cadastrar');
    
    
}