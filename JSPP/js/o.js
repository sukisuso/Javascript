
var onclick = function(){
	alert("onclick");
} 


JSPP.start = function(){ 
	JSPP.newH({type:2, text: "JavaScript ++", id:"h1_id", classname:"jspp_h"});
	JSPP.newButton({id:"mybutton",text: "First Button",func:onclick, classname:"jssp_button"});
	JSPP.newLink({id:"flink",text: "LINK to ajax Inverse",link:"http://docs.sencha.com/extjs/4.2.2/#!/api/Ext.Ajax", classname:"jspp_link"});
	JSPP.cout("Web loaded.");
};
JSPP.run();