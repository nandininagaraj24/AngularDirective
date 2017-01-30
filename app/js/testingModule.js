var testingModule = angular.module('testingModule', []);

testingModule.controller('$scope','testingCntrl',function($scope){

	$scope.status="hello";
})