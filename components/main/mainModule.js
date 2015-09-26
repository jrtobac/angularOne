var mainModule = angular.module("mainModule", ['ngRoute']);
 
 mainModule.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'components/main/mainView.html'
    });
 }]);


mainModule.controller("mainController", function($scope){
    $scope.firstName = "Jeremy";
});