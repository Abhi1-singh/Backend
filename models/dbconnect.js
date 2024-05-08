const mysql = require('mysql')
const connection = mysql.createConnection ({
user:'root',
password:"",
host:'localhost',
port:3306,
database: 'ecommerce2'
/////////////SECURiTY PURPOSE .env////////////////////
// user: process.env.USER,
// pass:process.env.PASS,
// host:process.env.LOCALHOST,
// port:process.env.PORT,
// database:process.env.DATABASE_NAME
///////////////////////////////////
})

connection.connect (function(err){
    if(err){
        console.log("error occured....",err);
    }
    else{
        console.log("connection establised....")
    }
})
module.exports = connection;