/**
*	REF LIB. Jesús Juan Aguilar. 10 - 2015. jesusjuanaguilar@gmail.com
*
*	Just add the ref.js to your web html code. If you wnat to reload when some file change and this file is 
*	no loaded in the html just use the ref.addFileListener(url); with the url of the resource, Enjoy.
*
*	You will need some server like XAMPP to use REB LIB.
*
*	@version: 0.1.1
*/

/**
* ref OBJECT
*/
var ref = {};

/**
* Function to reload the web.
*/
ref.refresh = function(){

	window.location.reload();
};

/*
*	Loop action. Check the canges in the files.
*/
ref.loop = function(){
	for (file in ref["paths"]) {
		var ltm = ref.getLastModified(file);  
		
		ltm = new Date(ltm).getTime();
		if(ref.load_date.getTime() < ltm){
			ref.refresh();
		}
	}
};

/**
* Function to load the paths of the files of the HTML
*/
ref.loadSeveralPaths = function(){

	if(!ref.lookConfig()){
		ref["timeREF"] = 1500;
		ref["paths"] = {};

		// Add the listener to the actual resource.
		ref.addFileListener(window.location.pathname);

		// Load all scripts
		var scripts = document.getElementsByTagName('script'); 
		for(var i = 0; i < scripts.length; i++) {
		    ref.addFileListener(scripts[i].src.substring(ref["separator"].length, scripts[i].src.length));
		}


		// Load all css
		var css = document.getElementsByTagName('link'); 
		for(var i = 0; i < css.length; i++) {
			if(css[i].type == "text/css" || css[i].rel == "stylesheet")
				ref.addFileListener(css[i].href.substring(ref["separator"].length, css[i].href.length));
		}
	}
};

/**
*	Function to get the last modified date of the files.
*/
ref.getLastModified = function(url){
	var client = new XMLHttpRequest();
    client.open('GET', url, false);
    client.send(null);

	if(client.status== 200){ 
		return client.getResponseHeader('Last-Modified');
	}
	return null;
};

/**
*	Function to add file to the list to check
*/
ref.addFileListener = function(url){
	ref["paths"][url] = ref.getLastModified(url);
};

/**
*	Check If exist the config file. If it exist the load the data.
*/
ref.lookConfig= function(){

	var client = new XMLHttpRequest();
    client.open('GET', ref["config_path"], false);
    client.send(null);

	if(client.status!= 200){
		debugger
		return false;
	}else{ 
		try{  
			var data = JSON.parse(client.responseText);
			if(data.hasOwnProperty("files") && data.hasOwnProperty("time")){
				if(Number.isInteger(data.time))
					ref["timeREF"] = data.time;
				else{
					console.log("REFLIB # error config content.");
					return false;
				}

				if(Array.isArray(data.files)){
					for(path in data.files){
						if(data.files[path].constructor == String )
							ref.addFileListener(data.files[path]);
						else{
							console.log("REFLIB # error config content.");
							return false;
						}
					}
				}else{
					console.log("REFLIB # error config content.");
					return false;
				}

			}else {
				console.log("REFLIB # error config content.");
				return false;
			}
			
    		
		}catch(e){   
			console.log(e);
			console.log("REFLIB # error loadin config.");
			return false;
		}
    	
		return true;  
	}
};

// OnLoad Loop     
/**   
/ 	Function to start the proces on the load function.
*/
window.onload = function() {
  	/*Start the loop */
  	ref.loadSeveralPaths();
  	setInterval(function(){ ref.loop(); }, ref["timeREF"]);
};

/* VARIABLES */
ref["timeREF"] = 1500;  
ref["paths"] = {};
ref["load_date"] = new Date();
ref["separator"] = window.location.protocol + "//" + window.location.host;
ref["config_path"] = "/config/ref-config.json"