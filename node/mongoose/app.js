/*
*   Simple conexion and insert on Mongo.
*	Jesús Juan Aguilar.
*/

var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
mongoose.connect('mongodb://localhost/simpledb');

//Object DB like Mongo console.
var db = mongoose.connection;
db.on('error', function (err) {console.log('Connection error', err);});
db.once('open', function () {console.log('Conexion stabilised');

	db.collection("person").findOne({"name":"Oscar"}, function (err, docs) {
	    // docs is an array
        //db.collection("person").remove(docs)
	 	db.collection("person").update(docs, {"name":"Jesus"});

	});
});

var user = {
	_id: new ObjectID(),
	"name": "Laura"
};



//db.collection("person").insert(user);

//db.collection("person").remove(user);
//db.collection("person").remove(user2);