
var onclick = function(){
	JSPP.AJAX({method:"GET", url:"http://192.168.56.1/views/secuel.html", parameters:"", target:"div2"});
} 


JSPP.start = function(){ 
	JSPP.newH({type:2, text: "JavaScript ++", id:"h1_id", classname:"jspp_h"});
	JSPP.newButton({id:"mybutton",text: "First Button", func:onclick, classname:"jssp_button"});
	JSPP.newLink({id:"flink",text: "LINK to ajax Inverse",link:"/views/secuel.html", classname:"jspp_link"});
	JSPP.newDiv({id:"div2"});
};
JSPP.run();