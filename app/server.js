var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000; 
var logger = require("morgan");


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);




app.listen(PORT, function(){
	console.log('app is listening on port ' + PORT);
})

