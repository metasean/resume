var app = angular.module('resumeApp', ["ngAnimate"]);


app.directive("showMe", function($animate) {
	return function(scope, element, attrs) {
		console.log(attrs.showMe)
		scope.$watch(attrs.showMe, function(newVal) {
			if (newVal) {
				$animate.addClass(element, attrs.showMe);
			} else {
				$animate.removeClass(element, attrs.showMe);
			}
		})
	}
})

// mucho kudos to https://thinkster.io/egghead/animating-the-angular-way/
app.animation(".show", function() {
	var cssVal;
	return {
		addClass: function(element, className) {
			console.log(element);
			if (className = "showAddendum") {
				TweenLite.to(element, 1, {opacity: 1, backgroundColor: '#fff008'});
			} else if (className = "showArrow") {
				TweenLite.to(element, 1, {opacity: 1, backgroundColor: 'red'});
			};
		},
		removeClass: function(element, className) {
			if (className = "showAddendum") {
				TweenLite.to(element, 1, {opacity: 0, backgroundColor: '#ffffff'});
			} else if (className = "showArrow") {
				TweenLite.to(element, 1, {opacity: 0, backgroundColor: '#ffffff'});
			};
		}
	}
})