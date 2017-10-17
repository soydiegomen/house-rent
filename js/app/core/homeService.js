(function () {
	'use strict';

	
	angular.module('chaiApp.core').factory('homeService', homeService);

	homeService.$inject = ['$http','appConfig'];

	function homeService($http, appConfig){
		var service = {
			getHouses : getHouses
		};

		return service;

		function getHouses(type){
			var serviceUrl = appConfig.apiBaseUrl + '/api/published-houses'+
				'?property=Casa&operation=Venta&greater=100&least=6000';

			return $http.get(serviceUrl).then(housesComplete);

			function housesComplete(data, status, headers, config){
				return data.data;
			}
		}

	}
})();