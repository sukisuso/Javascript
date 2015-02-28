// PRIMERO REALIZAMOS LA CARGA de la BD
BDB.createTable("amigos");
BDB.loadJSON("amigos", "http://localhost:8080/json/amigo.json");


JSPP.start = function(){ 

	JSPP.newH({type:2, text: "JavaScript ++: EXAMPLE CRUD", id:"h1_id", classname:"jspp_h", into:"title"});
	JSPP.newTable({id:"tabla",classname:"jspp_table",titulo:"TABLACA", into:"tableplace", array:BDB.getTable("amigos").getAll()});
	JSPP.newEXCEL_TABLELink("prueba.csv", "tabla", "content");

};

JSPP.run();


// Funcion para el Search in Real Time.
function myfunctionCutter(value){
	JSPP.newTable({id:"tabla",replace:"yes",classname:"jspp_table", into:"tableplace", array:BDB.getTable("amigos").like(value)});
}

function addForm (formulario){
	var idf = formulario.fid.value;
	var namef = formulario.fname.value;
	var phonef = formulario.fphone.value;
	var emailf = formulario.femail.value;

	if(isAlpha(namef) && isNatural(idf) && isNatural(phonef) && isEmail(emailf)){
		BDB.getTable("amigos").push({id:idf, nombre:namef, telefono:phonef, email:emailf});
		JSPP.newTable({replace:"yes", id:"tabla",classname:"jspp_table",titulo:"TABLACA", into:"tableplace", array:BDB.getTable("amigos").getAll()});
		formulario.fid.value ="";
		formulario.fname.value ="";
		formulario.fphone.value = "";
		formulario.femail.value ="";
	}
	else{
		JSPP.newH({type:6, text: "Error en los datos", id:"h6_error", into:"error"});
	}

	return false;
}

function deleteForm (formulario){
	var idf = formulario.fidd.value;

	if(isNatural(idf) && notNull(idf)){
		BDB.getTable("amigos").delete(idf);
		JSPP.newTable({replace:"yes", id:"tabla",classname:"jspp_table",titulo:"TABLACA", into:"tableplace", array:BDB.getTable("amigos").getAll()});
		formulario.fidd.value ="";
	}
	else{
		JSPP.newH({type:6, text: "Error en los datos", id:"h6_error", into:"error"});
	}

	return false;
}


