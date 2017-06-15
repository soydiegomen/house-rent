( function() {
	'use strict';

	angular.module('chaiApp.home').controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['$routeParams'];

	/**@ngInject*/
	function HomeCtrl($routeParams){
		var homeCtrl = this;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated HomeCtrl');	
		}
	}
})();