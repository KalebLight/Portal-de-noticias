var express = require('express');

var app = express(); //executando a função contida em 'express'

app.set('view engine', 'ejs')//.set => para modificar algo na tabela de propriedade do Express. Depois disso o Express entende que o gerador de views será o EJS.
app.set('views', './app/views')

module.exports = app;