var express = require('express');
var app = express(); //executando a função contida em 'express'
app.set('view engine', 'ejs')//.set => para modificar algo na tabela de propriedade do Express. Depois disso o Express entende que o gerador de views será o EJS.
app.get('/',function(req, res){
    res.send("<html><body>Portal de Notícias em Express</body></html>")
})

app.get('/tecnologia',function(req, res){
    
    res.render("secao/tecnologia")
})

app.listen(3000, function(){
   
})