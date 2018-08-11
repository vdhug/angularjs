'use strict';
angular.module('blogList').
	component("blogList", {
		//template: '<div class=""><h1 class="new-class">{{title}}</h1><button ng-click="clickTest()">Click me</button></div>',
		templateUrl: '/templates/blog-list.html',
		controller: function($scope){
			$scope.title = "Hi there"
			$scope.clicks = 0
			$scope.clickTest = function(){
				console.log("Clicked")
				$scope.clicks++
				$scope.title = "Clicked "+ $scope.clicks +" times"
			}
		}
	});
	