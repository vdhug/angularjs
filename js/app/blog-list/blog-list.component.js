'use strict';
angular.module('blogList').
	component("blogList", {
		//template: '<div class=""><h1 class="new-class">{{title}}</h1><button ng-click="clickTest()">Click me</button></div>',
		templateUrl: '/templates/blog-list.html',
		controller: function($scope){

			var blogItems = [
				{title: "Title 1", id: 1, description: "First Item"},
				{title: "Title 2", id: 2, description: "Second Item"},
				{title: "Title 3", id: 3, description: "Third Item"},
				{title: "Title 4", id: 4, description: "Fourth Item"},
				{title: "Title 5", id: 4, description: "Fifth Item"}
			]
			$scope.items = blogItems

			$scope.title = "Hi there"
			$scope.clicks = 0
			$scope.clickTest = function(){
				console.log("Clicked")
				$scope.clicks++
				$scope.title = "Clicked "+ $scope.clicks +" times"
			}
		}
	});
	