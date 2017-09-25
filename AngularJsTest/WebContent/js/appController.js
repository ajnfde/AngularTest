app.controller("ctrl", function($scope){
	$scope.uname="";
	$scope.pwd="";
	$scope.msg1="";
	$scope.msg2="";
	
	$scope.authentification = function(e){
		if($scope.uname.length == 0){
			$scope.msg1 = "** enter your username";
			e.preventDefault();
		} else {
			$scope.msg1 = "";
		}
		
		if($scope.pwd.length == 0){
			$scope.msg2 = "** enter your password";
			e.preventDefault();
		} else {
			$scope.msg2 = "";
		}

	};
})