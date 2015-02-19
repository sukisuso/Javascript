/*
* Libreria JSPP. JavaScript Plus Plus. Jesús Juan Aguilar. Version 0.1.1
*/
var JSPP = {};
JSPP.cout = function (text){console.log(text);}; //Funcion para mostrar por consola.
JSPP.start = function(){};
JSPP.run = function() {window.onload = JSPP.start; JSPP.cout("JSPP_Web loaded.");};


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


/*LOAD CSS FILE*//*
JSPP.loadCSS= function(){
	var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = "JSPP_css";
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'jspp/jspp_css/JSPP_css.css';
    link.media = 'all';
    head.appendChild(link);
}*/

/*AJAX*/
JSPP.AJAX = function(ajax){
    /**
	* ajax = {
	*     method: "GET/POST",
	*     url: "www.google.es",
	*     parameters: "?x=31",
	*     target: "div1"
	*  }
	**/
    http_request = false;
    if (window.XMLHttpRequest)
    {
      http_request = new XMLHttpRequest();
      if (http_request.overrideMimeType)
      {
        http_request.overrideMimeType('text/plain');
      }
    }
    else if (window.ActiveXObject)
    { 
      try
      {
        http_request = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try { http_request = new ActiveXObject("Microsoft.XMLHTTP"); }
        catch (e) {}
      }
    }
    if (!http_request)
    {
      console.log('JSPP_AJAX_.- Giving up. Cannot create an XMLHTTP instance');
      return false;
    }
    http_request.onreadystatechange = function() {updateElement(ajax.target);};
    if (ajax.method == 'GET')
    {
      http_request.open('GET', ajax.url + '?' + ajax.parameters, true);
      http_request.setRequestHeader('X-Requested-With','xmlhttprequest');
      http_request.send(null);
    }
    else if (ajax.method == 'POST')
    {
      http_request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      http_request.setRequestHeader('X-Requested-With','xmlhttprequest');
      http_request.open('POST', ajax.url, true);
      http_request.send(ajax.parameters);
    }
    else
    {
      console.log('JSPP_AJAX_.- Sorry, unsupported HTTP method (POST/GET)');
    }
  };

  function updateElement(target)
  {
    if (http_request.readyState == 4)
    {
      if (http_request.status == 200)
      {
        document.getElementById(target).innerHTML =
          http_request.responseText;
      }
    }
  }

  /*CROSS_DOMAIN*/
JSPP.CrossDomain = function(domain){};