app.controller('fullController', function ($rootScope, $scope, $state, $stateParams, $window, $ionicSideMenuDelegate) {
  
    
	$scope.init = function(){
		$scope.imgHeight = $window.innerHeight;
	    $scope.imgWidth = $window.innerWidth;

		$scope.choice = $stateParams.choice;
   		
   		if($stateParams.tapOption == "true"){
   			$scope.showBackCard = true;
   			$scope.showOption = false;
   		}else{
   			$scope.showBackCard = false;
   			$scope.showOption = true;
   		}

    }
    $scope.init();

	$scope.showFullImage = function(){
		$scope.showBackCard = false;
   		$scope.showOption = true;
    }

   	$scope.getInitialPage = function(){
    	$state.go("home");
    }

	$scope.toggleLeft =  function(){
		$ionicSideMenuDelegate.toggleLeft();
	}
});