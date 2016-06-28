tsuro.config(function ($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: '/js/login/login.html',
    controller: 'loginCtrl'
  });
});

tsuro.controller("loginCtrl", function ($scope, $firebaseAuth) {
 // var ref = firebase.database().ref();
 //  // var ref = new Firebase(fb.url);
  var auth = $firebaseAuth();

  $scope.logInWithGoogle = function(){
    auth.$signInWithPopup("google").then(function(authData) {
      console.log("Logged in as:", authData);
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  };


});