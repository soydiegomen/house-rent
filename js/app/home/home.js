( function() {
	'use strict';

	angular.module('chaiApp.home').controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['homeService'];

	/**@ngInject*/
	function HomeCtrl(homeService){
		var homeCtrl = this;

		//Properties
		homeCtrl.listHouses = null;
		homeCtrl.filters = { 
			search: '',
			property: '', 
			operation: '', 
			greater: 0, 
			least: 0 
		};
		homeCtrl.selectedFilters = [];

		//Atributtes
		

		//Events
		homeCtrl.filterByProperty = filterByProperty;
		homeCtrl.filterByOperation = filterByOperation;
		homeCtrl.filterByKey = filterByKey;
		homeCtrl.unselectFilter = unselectFilter;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated HomeCtrl');
			getHouses();
		}

		//Events
		function filterByProperty(selectedProperty){
			//Register new filter
			var filter = { type: 'property', value: selectedProperty };
			registerFilter(filter);
			
			//Call backend service and update house list
			homeCtrl.filters.property = selectedProperty;
			getHouses();
		}

		function filterByOperation(selectedOperation){
			//Register new filter
			var filter = { type: 'operation', value: selectedOperation };
			registerFilter(filter);

			homeCtrl.filters.operation = selectedOperation;
			//Call backend service and update house list
			getHouses();
		}

		function filterByKey(){
			//Call backend service and update house list
			console.log(homeCtrl.filters.search);
			getHouses();
		}

		function unselectFilter(filter){
			console.log('unselected', filter);
			switch(filter.type){
				case 'property':
					homeCtrl.filters.property = '';
					break;
				case 'operation':
					homeCtrl.filters.operation = '';
					break;
			}
			removeFilter(filter);
			//Update list of houses
			getHouses();
		}

		//Helpers
		function getHouses(){
			homeService.getHouses(homeCtrl.filters).then(function(data){
				setupHouseList(data);
				homeCtrl.listHouses = data;
			});
		}

		function setupHouseList(listHouses){
			angular.forEach(listHouses, function(value, key){

				//Setup default image url
				if(value.filesData.length > 0){
					var defautltImage = value.filesData[0];
					defautltImage.completeUrl = 'http://housefiles.loc:8888/' + defautltImage.fileUrl;
					//Add to House JSON the default image with complete url
					value.defautltImage = defautltImage;
				}else{
					//Set default image for house without image
					value.defautltImage = { completeUrl : 'img/demo/houses/casa-dos.jpg'};
				}

				//Setup metrics info
				var likes = 0;
				var views = 0;
				if(value.metrics.length > 0){
					likes = value.metrics[0].likes;
					views = value.metrics[0].views;
				}
				value.likes = likes;
				value.views = views;
			});
		}

		function registerFilter(filter){
			//Si este tipo de filtro ya fue seleccionado anteriormente, lo elimina del arreglo
			removeFilter(filter);
			//Agrega el nuevo filtro al arreglo
			homeCtrl.selectedFilters.push(filter);
		}

		function removeFilter(filter){
			var selectedFilters = homeCtrl.selectedFilters;
			angular.forEach(selectedFilters, function(value, key){
				if(value.type === filter.type){
					//No debe haber más de un filtro del mismo tipo
					selectedFilters.splice(key, 1);
				}
			});
		}
	}
})();