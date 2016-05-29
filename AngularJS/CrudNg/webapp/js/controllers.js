/**
 * 
 */
app.controller("appController", function appController($scope){
	//añadimos usuarios por defecto
	$scope.usuarios = [
        {
            nombre : "Israel Parra",
            web : "http://uno-de-piera.com",
            edad : 32,
            profesion : "programador web"
        },
        {
            nombre : "Pepito",
            web : "http://pepito.com",
            edad : 24,
            profesion : "vender palotes!"
        }
    ]
})

//route params es para identificar los segmentos de la url, en este caso, para reconocer usuarios
app.controller("infoController", function infoController($scope,$routeParams){
	$scope.usuario = $scope.usuarios[$routeParams.id];
});
 
//creamos el controlador addController para guardar usuarios nuevos con push
app.controller("addController", function addController($scope,$location){
	$scope.textButton = "Añadir un nuevo usuario";
	$scope.usuario = {};
	$scope.newUser = function(){
		$scope.usuarios.push($scope.usuario);
		$location.url("/");
	}
})
 
app.controller("editController", function editController($scope,$routeParams,$location){
	//obtenemos el usuario a editar con routeParams
	$scope.textButton = "Editar usuario";
	$scope.usuario = $scope.usuarios[$routeParams.id];
	$scope.editUser = function(){
		//actualizamos la información del usuario con la id que lleva $routeParams
		$scope.usuarios[$routeParams.id] = $scope.usuario;
		$location.url("/");
	}
})
 
//eliminamos el usuario dependiendo de su id
app.controller("removeController", function removeController($scope,$routeParams,$location){
	$scope.usuario = $scope.usuarios[$routeParams.id];
	$scope.removeUser = function(){
		//con splice  eliminamos un usuario del array usuarios, en este caso le decimos que debe eliminar 
		//el que tenga el id que le pasamos con $routeParams, y con el 1, le decimos que sólo 
		//debe eliminar 1, la función splice, como primer parámetro necesita la posición, que en este caso
		//es la id, y el segundo debe ser el número de elementos a eliminar, cabe decir que splice tiene
		//más variantes, y que sirve para añadir y eliminar elementos en un array, pero eso para otro momento
		$scope.usuarios.splice($routeParams.id, 1);
		$location.url("/");
	}
})