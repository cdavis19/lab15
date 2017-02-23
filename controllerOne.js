var app = angular.module('myMod');

app.controller('inputController', function($scope, myFactory, $location) {
  $scope.grabName = function(text) {
    console.log(text);
    myFactory.sendInfo(text);

    $location.path('/output');
  };
});
