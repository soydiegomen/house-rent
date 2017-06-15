(function() {
	'use strict';
	/* The name of the directives must star with lower case*/
	angular.module('chaiApp.widgets').directive('siteMenu', siteMenu);

	siteMenu.$inject = ['$rootScope'];

	function siteMenu($rootScope) {
		var directive = {
			restrict: 'EA',
		    templateUrl: 'js/app/widgets/siteMenu/site-menu.html',
		    controllerAs: 'menuCtl',
		    controller: 'SiteMenuCtrl'
		};

		return directive;
	}

})();