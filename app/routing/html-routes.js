
var path = require('path');

module.exports = function(app){


	app.get('/survey', function(req, res){
		// console.log(process.cwd())
		res.sendFile(process.cwd()+"/app/public/survey.html");
	});


	app.use('/',function(req,res){
		// console.log(path.join(__dirname + '/../public/home.html'))
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});



	// app.get('/survey', function(req,res){
	// 	res.sendFile(path.join(__dirname + '/../public/survey.html'));
	// });


}

