module.exports = function(application){ 
    application.get('/formulario_inclusao_noticia',function(req, res){
        res.render("admin/form_add_noticia",{validacao : {}, noticia:{} })
    })

    application.post('/noticias/salvar', function(req, res){
        let noticia = req.body 
        req.assert('titulo', 'Título não pode ser vazio.').notEmpty()
        req.assert('resumo', 'Resumo não pode ser vazio.').notEmpty()
        req.assert('resumo', 'O resumo deve conter entre 10 e 100 caracteres.').len(10,100)
        req.assert('autor', 'Autor não pode ser vazio.').notEmpty()
        req.assert('data_noticia', 'Data deve estar no formato correto.').notEmpty()
        req.assert('noticia', 'A noticia não pode ser vazia.').notEmpty()


        let erros = req.validationErrors()
        if (erros){
            res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia})
            return;
        }

        let connection = application.config.dbConnection()        
        let noticiasModel = new application.app.models.NoticiasDAO(connection)

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias')
    }) 

})

    
    
}