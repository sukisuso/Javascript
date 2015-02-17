/*
* Libreria JSPP. JavaScript Plus Plus. Jesús Juan Aguilar. Version 0.1.1
*/
var JSPP = {};
JSPP.cout = function (text){console.log(text);}; //Funcion para mostrar por consola.
JSPP.start = function(){};
JSPP.run = function() {window.onload = JSPP.start; JSPP.loadCSS();};

/*AJAX*/
JSPP.AJAX = function(ajax){};

/*CROSS_DOMAIN*/
JSPP.CrossDomain = function(domain){};

/*NEW ELEMENTS*/
//Nuevo boton.
JSPP.newButton = function (b){
	
	/**
	* b = {
	*     type: "button",
	*     id: "new_id_h",
	*  	  text: "texto",
	*     name: "nombre"
	*	  into: "node_id",
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
	*  	  text: "texto",
	*     name: "nombre"
	*	  into: "node_id",
	*     classname: "class css",
	*     link: "http://www.javascriptpp.com",
	*	  onclick: function
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

JSPP.newDiv = function (d){};
JSPP.newForm = function(f){};
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
	*  	  text: "texto"
	*	  into: "node_id"
	*     classname: "class css"
	*  }
	**/

	var p = document.createElement("h"+h.type); 
	p.setAttribute("id", h.id);
	p.className= h.classname;
    var contenido = document.createTextNode(h.text);
    p.appendChild(contenido);
    document.body.appendChild(p);
};


/*LOAD CSS FILE*/
JSPP.loadCSS= function(){
	var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = "JSPP_css";
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'jspp_css/JSPP_css.css';
    link.media = 'all';
    head.appendChild(link);
}