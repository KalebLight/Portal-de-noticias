module.exports.get_noticia = function(application, req, res){
    var connection = application.config.dbConnection()        
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(function(error, result){
        res.render("noticias/noticia", {noticia : result} )
    }) 
}

module.exports.get_noticias = function(application, req, res){
    var connection = application.config.dbConnection()    
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result){
        res.render("noticias/noticias", {noticias : result})
    }) 
}
