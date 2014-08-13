var express = require('express');
var app = express();
var parser = require('body-parser');
var Cabinet = require('cabinetkv');
var mongoose = require('mongoose');

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

var cabinet = new Cabinet('cabinetStore' , mongoose , {maxAge: -1});

var encode = function encode( data ){
	return (new Buffer(JSON.stringify(data))).toString("base64");
};

var decode = function decode( value ){
	return (new Buffer(value , 'base64')).toString();
};

var parse = function parse( request ){
	var url = "mongodb://" + request.username + ":" + request.password + "@" + request.host + ":" + request.port + "/sales";
	var key = request.path + ":" + request.userID + "@"  + request.staticID;
	var value = request.data ? encode(request.data) : "";
	mongoose.connect(url);
	return {
		key: key,
		value: value
	}	
}

app.post('/set' , function ( req , res ){
	var data = parse( req.body );
	cabinet.set(data.key , data.value , function ( err , key ){
		if( err ){
			console.log(err);
			return;
		}
		console.log("Success");
		mongoose.connection.close();
		res.end();
	});	
});

app.post('/get', function ( req, res ){
	var data = parse( req.body );	
	cabinet.get(data.key, function ( err , value ){
		if( err ){
			console.log(err);
			return ;
		}
		res.writeHead(200 , {'Content-Type': 'text/plain'});					
		mongoose.connection.close();
		res.end((value ? decode(value) : "No Results Found"));
	});
});

app.listen(8080);
console.log("Now Running in localhost:8080");