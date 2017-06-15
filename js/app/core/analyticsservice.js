(function () {
	'use strict';
	
	angular.module('chaiApp.core').factory('analyticsservice', analyticsservice);

	analyticsservice.$inject = ['$http','appConfig', '$window', '$location'];

	function analyticsservice($http, appConfig, $window, $location){
		var service = {
			trackPageView : trackPageView,
			trackEvent : trackEvent
		};

		return service;

		function trackPageView(){
			if($window.ga){
				$window.ga('send', 'pageview', { page: $location.url() });
			}else{
				reportAnalyticsOff();
			}
		}

		function trackEvent(category, action, info){
			if($window.ga){
				$window.ga('send', {
				  hitType: 'event',
				  eventCategory: category,
				  eventAction: action,
				  eventLabel: info
				});
			}else{
				reportAnalyticsOff();				
			}	
		}

		/*helpers*/

		function reportAnalyticsOff(){
			console.log('GOOGLE ANALYTICS IS OFF');
		}
	}
})();