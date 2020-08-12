var express = require('express');
var app = express(); //executando a função contida em 'express'

app.get('/',function(req, res){
    res.send("<html><body>Portal de Notícias em Express</body></html>")
})

app.get('/tecnologia',function(req, res){
    res.send("<html><body>Portal de Notícias (tecnológicas) em Express</body></html>")
})

app.listen(3000, function(){
   
})