const mysql= require('mysql')

const DbConnect=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'churchblog'
})

module.exports= DbConnect;
