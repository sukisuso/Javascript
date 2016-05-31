
var app = angular.module("app", ['ngRoute']);
 
app.service('userService', function() {
	  var user = {};

	  var setUser = function(newObj) {
	      user = newObj;
	  };

	  var getUser = function(){
	      return user;
	  };

	  return {
		  setUser: setUser,
		  getUser: getUser
	  };

	});


app.config(function($routeProvider){
	$routeProvider.when("/", {
		 templateUrl : "app/login/login.html",
		 controller : "loginController"
	})
	
	.when("/main", {
		 templateUrl : "app/main/main.html",
		 controller : "mainController"
	})
	
 	.otherwise({ redirectTo : "/"})
});

app.controller("appController", function appController($scope){
	
})


app.controller("mainController", function appController($scope, userService){

	$scope.UserName= "";
	$scope.$on('$viewContentLoaded', function() {
		console.log(userService.getUser());
		$scope.UserName= userService.getUser().name;
	});
});



