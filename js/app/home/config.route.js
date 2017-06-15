(function () {
	'use strict';
	angular.module('chaiApp.home').run(appRun);

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes() {
		return [
			{
				url: '/',
				config: {
					templateUrl: 'js/app/home/home.html',
			        controller: 'HomeCtrl',
			        controllerAs: 'homeCtrl'
				}
			}
		];
	}

})();