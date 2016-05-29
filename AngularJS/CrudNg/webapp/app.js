/**
 * 
 */

//creamos nuestro modulo llamado app
var app = angular.module("app", ['ngRoute']);
 
//hacemos el ruteo de nuestra aplicación
app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "templates/index.html"
	})
	//esta es la forma de decirle a angular que vamos a pasar una variable por la url
	.when('/info/:id', {
      templateUrl : "templates/info.html",
     controller : "infoController"
    })
	.when("/add", {
		title: 'Añadir usuario',
		templateUrl : "templates/add.html",
		controller : "addController"
	})
	.when("/edit/:id", {
		title: 'Editar usuario',
		templateUrl : "templates/edit.html",
		controller : "editController"
	})
 	.when("/remove/:id", {
 		title: 'Eliminar usuario',
 		templateUrl : "templates/remove.html",
 		controller : "removeController"
 	})
 	.otherwise({ redirectTo : "/"})
})