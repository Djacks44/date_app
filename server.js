var express = require('express');
var friends = require("./app/data/dates.js");
var bodyParser = require('body-parser');

var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;
var logger = require("morgan");


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);




app.listen(PORT, function(){
	console.log('app is listening on port ' + PORT);
})

