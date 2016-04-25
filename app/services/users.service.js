/**
 * Created by chris on 4/24/16.
 */
(function () {
    'use strict';
    angular.module(egenSolutions.globals.appName)
        .factory('userServices', ['$http', 'userServiceBase', function ($http, userServiceBase) {
            var serviceBase = userServiceBase;
            var dataFactory = {};

            dataFactory.isUserNameUnique = function (emailAddress) {
                return $http({
                    method: 'GET',
                    url: serviceBase + '/users/' + emailAddress + '/emailAddress/'
                })
                    .then(function () {
                        return false;
                    }, function () {
                        return true;
                    });
            };
            return dataFactory;
        }]);
})();