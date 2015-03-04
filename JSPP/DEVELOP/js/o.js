
var onclick = function(){
	JSPP.AJAX({method:"GET", url:"http://localhost:8080/views/secuel.html", parameters:"url=unooo", target:"div2", jspp_page:true});
} 


JSPP.start = function(){ 
	JSPP.newH({type:2, text: "JavaScript ++", id:"h1_id", classname:"jspp_h", into:"body"});
	
};
JSPP.run();