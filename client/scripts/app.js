angular
	.module('arigonzo', [
		'ui.router'
		])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('landing', {
				url: '/',
				templateUrl: 'templates/landing.html',
				controller: 'landingCtrl'
			})
			.state('home', {
				url: '/home',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			})
			.state('skills', {
				url: '/skills',
				templateUrl: 'templates/skills.html',
				controller: 'skillsCtrl'
			})
			.state('work', {
				url: '/work',
				templateUrl: 'templates/work.html',
				controller: 'workCtrl'
			})
			.state('lab', {
				url: '/lab',
				templateUrl: 'templates/lab.html',
				controller: 'labCtrl'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'templates/contact.html',
				controller: 'contactCtrl'
			})
	}])
