
var app = angular.module("app", ['ngRoute']);
 
app.config(function($routeProvider){
	$routeProvider.when("/", {
		 templateUrl : "app/login/login.html",
		 controller : "loginController"
	})
	
	.when("/main", {
		 templateUrl : "app/main/main.html",
	})
	
 	.otherwise({ redirectTo : "/"})
});

app.controller("appController", function appController($scope){
})


/*
app.controller("loginController", function appController($scope, $location){

	$scope.usuario = {};
	$scope.loginUser = function () {
		$location.url("/main");
	}
});
*/



