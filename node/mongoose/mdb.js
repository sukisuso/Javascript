var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost/simpledb", function(err, db) {
 
	
	console.log("##Start.");

	/*db.collection("person").find({name:"Laura"},  function(err, docs) {
		console.log(err);
		
		docs.each(function(err, doc) {
		    if(doc) {
		        console.log(doc);
		    }else{
				console.log(err);
			}
		});*/

		//db.collection("person").update(result, {"name":"Jesus", idWork:1});
		
		var reduce = function (key, valuew){
			var result = {"name":"", title :""};
			values.forEach(function(value) {
				if(value.name !== null) {result.name = value.name;}

				if(value.idWork !== null) {result.title = value.title;}
			});
		return result;
		};
	
		db.collection("person").mapReduce(
		
			function(){emit(this.idWork, {"name":this.name})}, //map
			reduce, 
			{
				out:{reduce : "order_totals"},
				query:{idWork:3}
			},
			function(err, end){
				//Second Map
				db.collection("work").mapReduce(
					function(){emit(this.idWork, {"title":this.title})}, //map
					reduce, 
					{
						out:{reduce :"order_totals"},
						query:{idWork:3}
					},
					function(err, end){
						console.log(end)
						console.log("end Map Reduce");
						db.close();
					}
				);
			}
		);
});


