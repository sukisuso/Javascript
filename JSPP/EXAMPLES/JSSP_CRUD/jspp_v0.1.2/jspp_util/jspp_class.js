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
	*	  replace:"yes"(default NULL)
	*  }
	**/
	var into = document.getElementById(b.into);
	var boton = document.createElement("button");
	boton.setAttribute("id", b.id);
	boton.type = b.type; 
	boton.name = b.name; 
	boton.innerHTML= b.text;
	boton.className= b.classname;
	boton.onclick = b.func;
	into.appendChild(boton);
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
	*	  replace:"yes"(default NULL)
	*	  download:"filename"
	*  }
	**/
	var into = document.getElementById(a.into);
	var enlace = document.createElement("a");
	enlace.setAttribute("id", a.id);
	enlace.type = a.type; 
	enlace.name = a.name; 
	enlace.innerHTML= a.text;
	enlace.className= a.classname;
	enlace.setAttribute("href", a.link);
	into.appendChild(enlace);
};
//New Element Div.
JSPP.newDiv = function (d){
	/**
	* d = {
	*     id: "new_id_h",
	*	  into: "div_for"
	*	  replace:"yes"(default NULL)
	*  }
	**/
	var into = document.getElementById(d.into);
	var enlace = document.createElement("div");
	enlace.setAttribute("id", d.id);
	into.appendChild(enlace);
};

//New Form
JSPP.newForm = function(f){};

JSPP.newTable = function (t){

	/**
	* t = {
	*     id: "new_id_h",
	*     into: "node_id",
	*     classname: "class css"
	*	  replace:"yes" (default null)
	*  }
	**/
	var row,cell,object;

 	var table = document.createElement('table');
 	var tableBody = document.createElement('tbody');

 	var data = t.array;
 	for(var i = 0, length1 = data.length; i < length1; i++){
 		row = document.createElement('tr');
 		object = data[i];
 		for(x in object){
     	 	cell = document.createElement('td');
 	    	cell.appendChild(document.createTextNode(object[x]));
 			row.appendChild(cell);
 		}
 		tableBody.appendChild(row);
 	}
	
	table.appendChild(tableBody);
	table.setAttribute("id", t.id);
	table.className= t.classname;

	if(t.replace){
		document.getElementById(t.into).innerHTML = "";
		document.getElementById(t.into).appendChild(table);
	}else{
		document.getElementById(t.into).appendChild(table);
	}
};
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
	*	  replace:"yes"(default NULL)
	*  }
	**/
	var into = document.getElementById(h.into);

	var p = document.createElement("h"+h.type); 
	p.setAttribute("id", h.id);
	p.className= h.classname;
	var contenido = document.createTextNode(h.text);
	p.appendChild(contenido);

	if(!h.gettext){
		if(h.replace){
			document.getElementById(p.into).innerHTML = "";
			document.getElementById(p.into).appendChild(table);
		}else{
			document.getElementById(h.into).appendChild(p);
	}
	}else{
		return p;
	}
}; 


JSPP.newEXCEL_TABLELink = function (fnombre, tabla, into2){
	/**
	* fnombre = nombre del fichero
	* tabla = id de la tabla
	**/
	var into = document.getElementById(into2);
	var enlace = document.createElement("a");
	
 
 	enlace.setAttribute("donwload", "fnombre");
 	enlace.setAttribute("id", "excelLINK_"+tabla);
	enlace.innerHTML= "Descargar to Excel de "+ tabla;
	enlace.setAttribute("href", "#");
	enlace.setAttribute("onclick", "return ExcellentExport.csv(this, tabla, ';');");
	
	into.appendChild(enlace);
};
// 0.2 -> JSPP.newConsole = function(){};