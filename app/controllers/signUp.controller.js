/**
 * Created by chris on 4/24/16.
 */
(function () {
    'use strict';
    angular.module(egenSolutions.globals.appName)
        .controller('SignUpController', SignUpController);

    function SignUpController() {
        var vm = this;
        var user = {
            firstName: '',
            lastName: '',
            password: '',
            userName: ''
        };
        vm.user = user;
        vm.progress = {
            percentage: 0,
            color: "red"
        };
        vm.updateProgress = function (passed, count) {
            vm.progress.percentage = (passed / count) * 100;
            if (vm.progress.percentage > 40 && vm.progress.percentage < 100) {
                vm.progress.color = "yellow";
            }
        };
        vm.signUp = function () {
            angular.forEach(vm.signUpForm.$error.required, function (field) {
                field.$setTouched();
            });
            if (vm.signUpForm.$valid) {
                alert('Nice work!');
            }
        };
    }
})();