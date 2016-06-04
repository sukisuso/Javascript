/**
 * 
 */
var login = angular.module("login", ['ngRoute']);

login.controller("loginController", function appController($scope, $location, userService){

	$scope.nick = "";
	$scope.pass = "";
	$scope.loginUser = function () {
		userService.setUser({name:this.nick, pass: this.pass});
		$location.url("/main");
	}
});
