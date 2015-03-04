// JSPP Template.
// Based on http://beebole.com/pure/

var regexDirective= /[a-zA-Z]+/i;
var regexDirID = new RegExp('@');
var regexDirClass = new RegExp('#');
var regexDirAtt = new RegExp('%');


JSPP.render = function(data, directive){
	
	/*
	* data= {
	*		start:1,
	*		finish: 3,
	*		who: "Beehole";
	* }
	*/

	/*
	* directive = 'span'                 //to change all html tags.
	* 			= 'span@id*		         //to change one specific tag.
	*			= 'span#class'		     //to change all html tags with a class. 
	*/

 	if(regexDirID.test(directive)){
		innerCompleteID(data, directive);
	} else if(regexDirClass.test(directive)){
		innerCompleteClass(data, directive);
	} else if(regexDirective.test(directive)){
		innerComplete(data, directive);
	}

};

function innerComplete(data, directive){
	var list = document.getElementsByTagName(directive);
	var i= configurationIF(data.start);
	var end =configurationIF(data.finish, list.length);

	for(i ; i < end; i++){
		list[i].innerHTML = data.who;
	}
}

function innerCompleteID(data, directive){
	var array = splitByChar(directive, "@");
	if(array.length != 2){
		throw "Param error. Length must be 2 {"+array.length+"}";
	} else {
		var id = array[1];
		var tag = array[0];
	}

	var element = document.getElementById(id);
	if(element.tagName != tag)
		throw "Tag error. Must be equal "+tag +" != "+ element.tagName;
	else
		element.innerHTML = data.who;
}

function innerCompleteClass(data, directive){
	
	var array = splitByChar(directive, "#");
	if(array.length != 2 ){
		throw "Param error. Length must be 2 {"+array.length+"}";
	} else {
		var clase = array[1];
		var tag = array[0];
	}

	var list = document.getElementsByClassName(clase);
	var i= configurationIF(data.start);
	var end =configurationIF(data.finish, list.length);

	for(i ; i < end; i++){
		list[i].innerHTML = data.who;
	}
}
