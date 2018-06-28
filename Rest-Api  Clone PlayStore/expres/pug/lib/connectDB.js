var mysql = require("mysql");
var connection= mysql.createConnection({
	host : "localhost",
	user : "root" , 
	password : "",
	database : "express_1"
})

module.exports = connection;