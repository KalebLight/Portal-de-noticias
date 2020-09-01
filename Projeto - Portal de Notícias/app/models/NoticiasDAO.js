function NoticiasDAO(connection){
    this._connection = connection
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias WHERE id_noticia = 2' , callback)
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);   
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ? ', noticia, callback)
}

NoticiasDAO.prototype.get5Ultimas = function(callback){
    this._connection.query('select * from noticias order by data_craicao desc limit 5', callback)
}
    

module.exports = function(){
 return NoticiasDAO;
}
