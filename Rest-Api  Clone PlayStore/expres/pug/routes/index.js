var express = require('express');
var router = express.Router();
var connectDB = require("../lib/connectDB")
/* GET home page. */
router.get('/', function(req, res, next) {
	connectDB.connect();
	connectDB.qurey("select * from contants" , function(err ,rows ,fields ){
		if(err) throw err
		ress.send(rows);
	})
	connectDB.end()
  // res.render('index', { title: 'Express' });
});

module.exports = router;
