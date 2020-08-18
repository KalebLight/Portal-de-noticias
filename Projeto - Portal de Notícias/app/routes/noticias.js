module.exports = function(app) {
   
    app.get('/noticias', function(req, res){
        const mysql = require('mysql')
        const connection = mysql.createConnection({
            host : 'localhost',
            user : 'kaleb',
            password : 'mysql123',
            database : 'portal_noticias'
        });

        connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + connection.threadId);
        });
        connection.query('select * from noticias', function(error, result){
            res.send(result);
        });

   
    // res.render("noticias/noticias")
    });
}   