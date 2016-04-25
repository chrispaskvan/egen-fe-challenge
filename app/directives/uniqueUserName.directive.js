/**
 * Created by chris on 4/24/16.
 */
(function () {
    'use strict';
    angular.module(egenSolutions.globals.appName)
        .directive('egenUniqueUserName', egenUniqueUserName);

    function egenUniqueUserName() {
        var directive = {
            require: 'ngModel',
            link: linkFunc,
            scope: true,
            controller: UniqueUserNameController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, element, attrs, ngModel) {
            element.bind('blur', function (e) {
                if (!ngModel || !element.val()) return;
                var currentValue = element.val();
                scope.vm.isUserNameUnique(currentValue)
                    .then(function (unique) {
                        if (currentValue == element.val()) {
                            ngModel.$setValidity('unique', unique);
                        }
                    });
            });
        }
    }

    UniqueUserNameController.$inject = ['userServices'];

    function UniqueUserNameController(userServices) {
        var vm = this;
        vm.userServices = userServices;
        vm.isUserNameUnique = function (emailAddress) {
            return vm.userServices.isUserNameUnique(emailAddress)
                .then(function (unique) {
                    return unique;
                }, function (err) {
                    console.log(err);
                    return false;
                });
        }
    }
})();
