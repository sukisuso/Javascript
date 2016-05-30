/**
 * 
 */


app.controller("loginController", function appController($scope, $location){

	$scope.usuario = {};
	$scope.loginUser = function () {
		$location.url("/main");
	}
});
