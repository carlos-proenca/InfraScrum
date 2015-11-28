var app = angular.module('infraScrumApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

     //Disable back button
    document.addEventListener('backbutton', function(event) {
        return false; 
    });

    //Disable sleepy screen
    cordova.screenDim.disable();

    });   
})

app.config(function($stateProvider) {
  $stateProvider

  .state('home', {
      url: '',
      controller: 'homeController',
      templateUrl: 'pages/home.html',
      cache: false      
    })
	  .state('full', {
	    url: '/full:choice?tapOption',
	    controller: 'fullController',
      templateUrl: 'pages/full.html',
      cache: false
	  });
});