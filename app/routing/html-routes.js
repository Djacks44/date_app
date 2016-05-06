module.exports = function(app){

app.get('/', function(req, res){
	// var everyone = req.params.friends;
	// console.log(everyone);
	res.sendFile(process.cwd()+"/public/home.html");
});

app.get('/survey', function(req, res){
	// var everyone = req.params.friends;
	// console.log(everyone);
	res.sendFile(process.cwd()+"/public/survey.html");
});


}