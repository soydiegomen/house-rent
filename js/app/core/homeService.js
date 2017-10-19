(function () {
	'use strict';

	
	angular.module('chaiApp.core').factory('homeService', homeService);

	homeService.$inject = ['$http','appConfig'];

	function homeService($http, appConfig){
		var service = {
			getHouses : getHouses
		};

		return service;

		function getHouses(filters){
			var serviceUrl = appConfig.apiBaseUrl + '/api/published-houses';

			return $http.get(serviceUrl, { params: filters } ).then(housesComplete);

			function housesComplete(data, status, headers, config){
				return data.data;
			}
		}

	}
})();