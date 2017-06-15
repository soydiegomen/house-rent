(function() {
	'use strict';
	/* The name of the directives must star with lower case*/
	angular.module('chaiApp.widgets').directive('testAccordion', testAccordion);

	testAccordion.$inject = [];

	function testAccordion() {
		var directive = {
			restrict: 'EA',
		    templateUrl: 'js/app/widgets/testAccordion/test-accordion.html',
		    controllerAs: 'vm',
		    controller: 'TestAccordionCtrl'
		};
		/*
		For use add this tag to the view: <test-Accordion></test-Accordion>
		*/
		return directive;
	}

})();