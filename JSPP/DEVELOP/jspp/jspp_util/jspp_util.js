/*JSPP UTILES*/

/*AJAX*/
JSPP.AJAX = function(ajax) {
	/**
	 * ajax = {
	 *     method: "GET/POST",
	 *     url: "www.google.es",
	 *     parameters: "?x=31",
	 *     target: "div1",
	 *     jspp_page: true (deafult false.)
	 *  }
	 **/
	http_request = false;
	if (window.XMLHttpRequest) {
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			http_request.overrideMimeType('text/plain');
		}
	} else if (window.ActiveXObject) {
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}
	if (!http_request) {
		console.log('JSPP_AJAX_.- Giving up. Cannot create an XMLHTTP instance');
		return false;
	}
	if(!ajax.jspp_page){
		http_request.onreadystatechange = function() {updateElement(ajax.target);};
	}else {
		http_request.onreadystatechange = function() {updateJSPP(ajax.target);};
	}
	if (ajax.method == 'GET') {
		http_request.open('GET', ajax.url + '?' + ajax.parameters, true);
		http_request.setRequestHeader('X-Requested-With', 'xmlhttprequest');
		http_request.send(null);
	} else if (ajax.method == 'POST') {
		http_request.open('POST', ajax.url, true);
		http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		http_request.setRequestHeader('X-Requested-With', 'xmlhttprequest');
		http_request.send(ajax.parameters);
	} else {
		console.log('JSPP_AJAX_.- Sorry, unsupported HTTP method (POST/GET)');
	}
};

function updateElement(target) {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			document.getElementById(target).innerHTML = http_request.responseText;
		}
	}
}
/*Update JSPP_page*/
function updateJSPP(target) {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var wrap = document.createElement('div');
			var arrayOFResponses = eval(http_request.responseText);
			var cont = arrayOFResponses.length;

			for (var i = 0; i < cont; i++) {
				wrap.appendChild(arrayOFResponses[i]);
			}  
			document.getElementById(target).innerHTML = wrap.innerHTML;
		}
	}
}

/*Funcion para acceder a los parametros enviados por una peticion GET*/
JSPP.getParameterByName = function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};


function configurationIF(value, endValue){
	if(!endValue)
		return (value)?value:0;
	else
		return (value)?value:endValue;
}

function splitByChar(word, char){
	return word.split(char);
}