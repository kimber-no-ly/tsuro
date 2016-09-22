pathParadox.config(function ($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: '/browser/js/login/login.html',
        controller: 'loginCtrl'
    });
});

pathParadox.controller('loginCtrl', function ($scope, gameFactory) {
    $scope.logInWithGoogle = gameFactory.logInWithGoogle;
});
