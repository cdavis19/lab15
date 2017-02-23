var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/input', {
    controller: 'inputController',
    templateUrl: 'input.html'
  })
  .when('/output', {
    controller: 'outputController',
    templateUrl: 'output.html'
  })


  .otherwise({redirectTo:'/'});
  $locationProvider.hashPrefix('');
});
