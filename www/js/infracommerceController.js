app.controller('infracommerceController', function ($scope, $state,$stateParams,$window) {
    
    $scope.getFullPage = function(choiceText){
    	 $state.go("full",{"choice":choiceText});
    }


	$scope.getInitialPage = function(){
    	 $state.go("home");
    }

    $scope.choice = $stateParams.choice;
    $scope.imgHeight = $window.innerHeight;
    $scope.imgWidth = $window.innerWidth;

});