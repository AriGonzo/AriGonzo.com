angular
	.module('arigonzo')
	.controller('headerCtrl', ['$scope', '$location', function($scope, $location){
		$scope.links = [{
			title: 'About',
			sref: 'home'
		},{
			title: 'Skills',
			sref: 'skills'
		},{
			title: 'Work',
			sref: 'work'
		},{
			title: 'Lab',
			sref: 'lab'
		},{
			title: 'Contact',
			sref: 'contact'
		},]

		$scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1);
        return page === currentRoute ? 'active' : '';
    };
	}])