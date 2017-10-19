( function() {
	'use strict';

	angular.module('chaiApp.home').controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['homeService'];

	/**@ngInject*/
	function HomeCtrl(homeService){
		var homeCtrl = this;

		//Properties
		homeCtrl.listHouses = null;

		//Atributtes
		var filters = { property: '', operation: '', greater: 0, least: 0 };

		//Events
		homeCtrl.filterByProperty = filterByProperty;
		homeCtrl.filterByOperation = filterByOperation;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated HomeCtrl');
			getHouses();
		}

		//Events
		function filterByProperty(selectedProperty){
			filters.property = selectedProperty;
			//Call backen service and update house list
			getHouses();
		}

		function filterByOperation(selectedOperation){
			filters.operation = selectedOperation;
			//Call backen service and update house list
			getHouses();
		}

		//Helpers
		function getHouses(){
			homeService.getHouses(filters).then(function(data){
				setupHouseList(data);
				homeCtrl.listHouses = data;
			});
		}

		function setupHouseList(listHouses){
			angular.forEach(listHouses, function(value, key){
				if(value.filesData.length > 0){
					var defautltImage = value.filesData[0];
					defautltImage.completeUrl = 'http://housefiles.loc:8888/' + defautltImage.fileUrl;
					//Add to House JSON the default image with complete url
					value.defautltImage = defautltImage;
				}else{
					//Set default image for house without image
					value.defautltImage = { completeUrl : 'img/demo/houses/casa-dos.jpg'};
				}
			});
		}
	}
})();