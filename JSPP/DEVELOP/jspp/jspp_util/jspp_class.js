/*JSPP CLASS*/

var JSPP = {};
JSPP.cout = function (text){console.log(text);}; //Funcion para mostrar por consola.
JSPP.start = function(){};
JSPP.run = function() {window.onload = JSPP.start; JSPP.cout("JSPP_Web loaded.");};

//AJAX JSPP_page
JSPP.initResponse = function(){ JSPP.response = []; };
JSPP.addResponse = function(response){JSPP.response.push(response);};
JSPP.sendResponse = function(){ return JSPP.response;};

/*NEW ELEMENTS*/
//Nuevo boton.
JSPP.newButton = function (b){
	
	/**
	* b = {
	*     type: "button",
	*     id: "new_id_h",
	*     text: "texto",
	*     name: "nombre"
	*     into: "node_id",
	*     classname: "class css",
	*     func: function(){alert("Hi!")};
	*  }
	**/

	var boton = document.createElement("button");
	boton.setAttribute("id", b.id);
	boton.type = b.type; 
	boton.name = b.name; 
	boton.innerHTML= b.text;
	boton.className= b.classname;
	boton.onclick = b.func;
	document.body.appendChild(boton);
};

JSPP.newLink = function (a){
	/**
	* a = {
	*     type: "button",
	*     id: "new_id_h",
	*     text: "texto",
	*     name: "nombre"
	*     into: "node_id",
	*     classname: "class css",
	*     link: "http://www.javascriptpp.com",
	*     params: "url=jdaj",
	*     onclick: function
	*  }
	**/

	var enlace = document.createElement("a");
	enlace.setAttribute("id", a.id);
	enlace.type = a.type; 
	enlace.name = a.name; 
	enlace.innerHTML= a.text;
	enlace.className= a.classname;
	enlace.setAttribute("href", a.link);
	enlace.onclick = a.onclick;
	document.body.appendChild(enlace);
};
//New Element Div.
JSPP.newDiv = function (d){
	/**
	* d = {
	*     id: "new_id_h",
	*  }
	**/
	var enlace = document.createElement("div");
	enlace.setAttribute("id", d.id);
	document.body.appendChild(enlace);
};

//New Form
JSPP.newForm = function(f){




};

JSPP.newTable = function (t){};
JSPP.newIframe = function (i){};
JSPP.newParagraph = function(p){};
JSPP.newMenu = function(m){};
//Nuevo titulo.
JSPP.newH = function(h){

	/**
	* h = {
	*     type: 1,
	*     id: "new_id_h",
	*     text: "texto",
	*     into: "node_id",
	*     classname: "class css",
	*     gettext: true(default false)
	*  }
	**/
	var into = document.getElementById(h.into);

	var p = document.createElement("h"+h.type); 
	p.setAttribute("id", h.id);
	p.className= h.classname;
	var contenido = document.createTextNode(h.text);
	p.appendChild(contenido);

	if(!h.gettext){
		into.appendChild(p);
	}else{
		return p;
	}
}; 

// 0.2 -> JSPP.newConsole = function(){};