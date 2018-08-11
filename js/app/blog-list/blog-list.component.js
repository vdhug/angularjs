'use strict';
angular.module('blogList')
	.controller('BlogListController', function($scope){
		console.log("Hello!")
		$scope.title = "Hello There"
		$scope.clicks = 0
		$scope.clickTest = function(){
			console.log("Clicked")
		$scope.clicks++

		$scope.title = "Clicked "+$scope.clicks+" times"

		}
	});
