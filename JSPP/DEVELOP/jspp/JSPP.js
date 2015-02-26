/*
* Libreria JSPP. JavaScript Plus Plus. Jesús Juan Aguilar. Version 0.1.2
*/
// BEANS ACTIVATE
var BeanDB = true;
var Excel = true;


//Scripts
document.write('<script src="http://localhost:8080/jspp/jspp_util/jspp_class.js" type="text/javascript"></script>');
document.write('<script src="http://localhost:8080/jspp/jspp_util/jspp_util.js" type="text/javascript"></script>');
document.write('<script src="http://localhost:8080/jspp/jspp_util/jspp_validate.js" type="text/javascript"></script>');


//CSS
document.write('<link rel="stylesheet" type="text/css" href="http://localhost:8080/jspp/jspp_css/JSPP_css.css">');



//BEANS
if(BeanDB){
	document.write('<script src="http://localhost:8080/jspp/jspp_bin/BeanDB/bdb.js" type="text/javascript"></script>');
}
if(Excel){
	document.write('<script src="http://localhost:8080/jspp/jspp_bin/ExcellEntPort/excellentexport.min.js" type="text/javascript"></script>');
}