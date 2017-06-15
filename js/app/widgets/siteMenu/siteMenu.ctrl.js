(function(){
	'use strict';

	angular.module('chaiApp.widgets').controller('SiteMenuCtrl', SiteMenuCtrl);

	SiteMenuCtrl.$inject = [];

	function SiteMenuCtrl(){
		var ctrl = this;
        activate();

        function activate(){
			console.log('Activated SiteMenuCtrl');
		    ctrl.isNavCollapsed = true;
        }
	}

})();