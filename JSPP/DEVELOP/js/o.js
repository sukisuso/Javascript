
var onclick = function(){
	JSPP.AJAX({method:"GET", url:"http://localhost:8080/views/secuel.html", parameters:"url=unooo", target:"div2", jspp_page:true});
} 


JSPP.start = function(){ 
	/*JSPP.newH({type:2, text: "JavaScript ++", id:"h1_id", classname:"jspp_h", into:"body"});
	BDB.createTable("amigos");
	BDB.loadJSON("amigos", "http://localhost:8080/json/amigo.json");
	console.log(BDB.getTable("amigos").getAll());
	JSPP.newDiv({id:"NuevoDIV", into:"body"});
	JSPP.newTable({id:"tabla",replace:"yes",classname:"jspp_table",titulo:"TABLACA", into:"NuevoDIV", array:BDB.getTable("amigos").getAll()});
	JSPP.newEXCEL_TABLELink("prueba.csv", "tabla", "body");*/

};
JSPP.run();