var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl', ['$scope', '$http',
	function($scope, $http){
		console.log("Hellow World from controller");
	}]);