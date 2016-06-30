var app = angular.module('dailyStatus',['ngRoute']);

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {

});

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
            templateUrl : 'partials/content.html',
            controller  : 'mainController'
        })
});