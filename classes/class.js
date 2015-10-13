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
		return set_function_usable(newclass);
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

function set_function_usable (object){

	for(properties in object){
		if(properties[0] == "f" && properties[1] == ":"){
			var function_name = properties.substring(2,properties.length);

			var ff = null;
			eval("var ff = function "+function_name+' (){var name_array = "f:"+arguments.callee.name;for(actions in this[name_array]){eval(this[name_array][actions]);}};');
			object[function_name] = ff;

		}
	}

	return object;
}