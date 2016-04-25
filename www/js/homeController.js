app.controller('homeController', function ($scope, $state, $stateParams, $window, $ionicSideMenuDelegate) {
    
	$scope.hours = ["1H","2H","4H","8H"];
	$scope.days = ["2D","3D","5D","10D"];
	$scope.months = ["1M","2M","3M","6M"];
	$scope.others = ["cafe","vamu"];

	$scope.init = function(){
		$scope.tapOption = angular.fromJson(localStorage.getItem("tapOption")));
	}
	
	$scope.init();
	
    $scope.getFullPage = function(choiceText){    	
    	$state.go("full",{"choice":choiceText, "tapOption":$scope.tapOption.checked});
    }

	$scope.toggleLeft =  function(){
		$ionicSideMenuDelegate.toggleLeft();
	}

	$scope.changeTapOption =  function(opt){			
		var tap = {};
		tap.text = opt.text;
		tap.checked = opt.checked;
		localStorage.setItem("tapOption",  JSON.stringify(tap));
	}
});