/*
*	Store aplication
*	Jesús Juan Aguilar 
*	2016.
*/

var mongodb = require('mongodb');

var uri = "mongodb://localhost/store";
mongodb.MongoClient.connect(uri, function(error, db){
	
	if(error){
		console.log(error);
		process.exit(1);
	}
	
	db.collection('sample').insert({x:1}, function(error, result){
		if(error){
			console.log(error);
			process.exit(1);
		}
		
		db.collection('sample').find().toArray(function(error, docs){
			if(error){
				console.log(error);
				process.exit(1); 
			}
			console.log('Found docs: ');
			docs.forEach(function(doc){
				console.log(JSON.stringify(doc));
			});
		});
	});
	
});

