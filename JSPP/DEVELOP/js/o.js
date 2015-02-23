
var onclick = function(){
	JSPP.AJAX({method:"GET", url:"http://localhost:8080/views/secuel.html", parameters:"url=unooo", target:"div2", jspp_page:true});
} 


JSPP.start = function(){ 
	JSPP.newH({type:2, text: "JavaScript ++", id:"h1_id", classname:"jspp_h", into:"body"});
	JSPP.newButton({id:"mybutton",text: "First Button", func:onclick, classname:"jssp_button"});

	JSPP.newLink({texto:"enlace", link:"http://localhost:8080/views/secuel.html?url=sda"});
	JSPP.newDiv({id:"div2"});
	JSPP.newDiv({id:"div3"});
};
JSPP.run();