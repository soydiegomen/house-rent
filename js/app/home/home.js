( function() {
	'use strict';

	angular.module('chaiApp.home').controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['homeService'];

	/**@ngInject*/
	function HomeCtrl(, homeService){
		var homeCtrl = this;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated HomeCtrl');
			homeService.getHouses().then(function(data){
				console.log('getHouses', data);
			});
		}
	}
})();