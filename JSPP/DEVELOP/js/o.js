
var onclick = function(){
	JSPP.AJAX({method:"POST", url:"http://localhost:8080/views/secuel.html", parameters:"", target:"div2"});
} 

var onclick2 = function(){
	JSPP.AJAX({method:"POST", url:"http://localhost:8080/js/o_jspp.js", parameters:"", target:"div2", jspp_page:true});
} 


JSPP.start = function(){ 
	JSPP.newH({type:2, text: "JavaScript ++", id:"h1_id", classname:"jspp_h", into:"body"});
	JSPP.newButton({id:"mybutton",text: "First Button", func:onclick, classname:"jssp_button"});
	JSPP.newButton({id:"mybutton2",text: "Second Button", func:onclick2});
	JSPP.newDiv({id:"div2"});
	JSPP.newDiv({id:"div3"});
};
JSPP.run();