app.controller('infracommerceController', function ($scope, $state,$stateParams,$window) {
    

	$scope.hours = ["1H","2H","4H","8H"];
	$scope.days = ["2D","5D","10D"];
	$scope.months = ["1M","2M","3M","6M"];
	$scope.others = ["cafe","vamu"];


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