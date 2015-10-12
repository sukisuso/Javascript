/*
*	Js file to load clases defined on a JSON file. In class folder.
*	Jesús Juan Aguilar - jesusjuanaguilar@gmail.com
*	10-2015.
*/

var Class  = {};
Class["folder"] = "/class/";
Class["file_extension"] = ".json";

Class.new = function (classtype){

	var newclass = load_file_from_class_folder(Class["folder"]+classtype+Class["file_extension"]);
	if(newclass != null){
		return newclass;
	}

	console.log("Error Class File");
	return null;
}


function load_file_from_class_folder (url){

	var client = new XMLHttpRequest();
    client.open('GET', url, false);
    client.send(null);

    if(client.status!= 200){
    	return null;
    }else {
		try{
			return JSON.parse(client.responseText);
		}catch(e){
			console.log(e);
			return null;
		}
    }
}