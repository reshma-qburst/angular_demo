app.config(function($routeProvider){
	$routeProvider
		.when('/', {
            templateUrl : 'partials/content.html',
            controller  : 'mainController'
        })
});