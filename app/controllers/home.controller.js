/**
 * Created by chris on 4/24/16.
 */
(function () {
    'use strict';
    angular.module(egenSolutions.globals.appName)
        .controller('HomeController', function HomeController($scope) {
            $scope.testvar = 'home';
        });
})();