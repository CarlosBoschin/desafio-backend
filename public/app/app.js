var Myapp = angular.module('Myapp', ['ngRoute'])
.constant('API_URL', 'http://localhost:8000/api/');;

Myapp.config(function($routeProvider)
{
	$routeProvider
	.when('/', {
        templateUrl: 'views/Pessoas.html',
        controller: 'PessoasCtrl'
	})

	.otherwise({redirectTo: '/'});
});
