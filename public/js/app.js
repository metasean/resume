var app = angular.module('resumeApp', ["ngAnimate"]);


app.directive("showMe", function($animate) {
	return function(scope, element, attrs) {
		console.log('app.directive("fadeIn") called');
		scope.$watch(attrs.showMe, function(newVal) {
			if (newVal) {
				$animate.addClass(element, "show");
			} else {
				$animate.removeClass(element, "show");
			}
		})
	}
})

app.animation(".show", function() {
	return {
		addClass: function(element, className) {
			console.log('app.animation(".show") addClass called');
			TweenLite.to(element, 1, {opacity: 1});
		},
		removeClass: function(element, className) {
			console.log('app.animation(".show") removeClass called');
			TweenLite.to(element, 1, {opacity: 0});
		}
	}
})