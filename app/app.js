(function () {
    'use strict';
    angular.module(egenSolutions.globals.appName, ['ngResource', 'ngRoute'])
        .config(function ($locationProvider, $routeProvider) {
            $routeProvider.when('/signUp',
                {
                    templateUrl: 'views/signUp.html',
                    controller: 'SignUpController',
                    controllerAs: 'vm'
                });

            $routeProvider.otherwise({
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });

            $locationProvider.html5Mode(true);
        })
        .constant('userServiceBase', '//localhost:1102/api')
})();
