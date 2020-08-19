const mysql = require('mysql')   

connMySql = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'kaleb',
        password : 'mysql123',
        database : 'portal_noticias'
    });
}
module.exports = function (){
   return connMySql;   
}




// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });