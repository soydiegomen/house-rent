(function () {
	'use strict';

	var core = angular.module('chaiApp.core');

    core.constant('appConfig', 
    {
        apiBaseUrl: 'http://104.131.137.249/',
    });

    core.config(configure);

    //configure.$inject = ['$routeProvider', 'routehelperConfigProvider', 'locationProvider'];

    function configure ($routeProvider, routehelperConfigProvider, $locationProvider) {

        // Configure the common route provider
        routehelperConfigProvider.config.$routeProvider = $routeProvider;
        routehelperConfigProvider.config.docTitle = 'NG-Modular: ';

        // enable HTML5 mode as hashbang-type URLs will not work with mod_rewrite redirection
        //$locationProvider.html5Mode(true).hashPrefix('!');
    }
})();