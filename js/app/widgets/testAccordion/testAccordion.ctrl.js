(function(){
	'use strict';

	angular.module('chaiApp.widgets').controller('TestAccordionCtrl', TestAccordionCtrl);

	TestAccordionCtrl.$inject = [];

	function TestAccordionCtrl(){
		var vm = this;
        activate();

        function activate(){
			console.log('Activated TestAccordionCtrl');
		    vm.open = false;
        }
	}

})();