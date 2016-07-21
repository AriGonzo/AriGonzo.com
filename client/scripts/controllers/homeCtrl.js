angular
	.module('arigonzo')
	.controller('homeCtrl', ['$scope', function($scope){
		$scope.title = "Home"
		$scope.things = [{
			name: "first Thing"
		},{
			name: "second Thing"
		},{
			name: "third Thing"
		},{
			name: "fourth Thing"
		}]
	}])