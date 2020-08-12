var express = require('express');
var app = express(); //executando a função contida em 'express'
app.set('view engine', 'ejs')//.set => para modificar algo na tabela de propriedade do Express. Depois disso o Express entende que o gerador de views será o EJS.

app.get('/',function(req, res){
    res.render("home/index")
})
app.get('/formulario_inclusao_noticia',function(req, res){
   res.render("admin/form_add_noticia")
})
app.get('/noticias', function(req, res){
    res.render("noticias/noticias")
})

app.listen(3000, function(){
   
})