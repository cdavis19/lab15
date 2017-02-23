var app = angular.module('myMod');

app.controller('outputController', function($scope, myFactory) {
  $scope.text = myFactory.getInfo();
});
