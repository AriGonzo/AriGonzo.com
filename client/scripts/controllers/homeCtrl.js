angular
	.module('arigonzo')
	.controller('homeCtrl', ['$scope', function($scope){
		$scope.title = "Just the Facts:"
		$scope.facts = [{
			text: "Father to 1 baby girl",
			icon: 'babyIcon.png'
		},{
			text: "Raised in Orlando",
			icon: "mickyIcon.png"
		},{
			text: "Lived in New York City for 5 years",
			icon: "nycIcon.png"
		},{
			text: "Pro-Wrestling Aficionado",
			icon: "luchaIcon.png",
		},{
			text: "Flashpoint and Superman: Red Son tied for favorite comic books",
			icon: "comicIcon.png"
		},{
			text: "Still remember exactly how much a 3-day SNES game rental was at Blockbuster Video. (Spoiler, it's $4.24)",
			icon: "snesIcon.png"
		},{
			text: "Self-proclaimed 'Gadget Geek'",
			icon: "gadgetIcon.png"
		}
		]
	}])