/**
 * Created by chris on 4/24/16.
 */
(function () {
    'use strict';
    angular.module(egenSolutions.globals.appName)
        .directive('egenPasswordStrength', egenPasswordStrength);

    function egenPasswordStrength() {
        var directive = {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                length: "=",
                lower: '=',
                numeric: '=',
                special: '=',
                update: '=',
                upper: '='
            },
            link: linkFunc,
            controller: PasswordStrengthController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, element, attrs, ngModel) {
            element.bind('blur', function (e) {
                if (!ngModel || !element.val()) return;
                var currentValue = element.val();
                scope.vm.count = 0;
                scope.vm.passed = 0;
                var testResult;
                if (scope.vm.length) {
                    testResult = scope.vm.isLength(currentValue, scope.vm.length);
                    ngModel.$setValidity('length', testResult);
                    logTestResult(testResult);
                }
                if (scope.vm.lower) {
                    testResult = scope.vm.containsLowercase(currentValue, scope.vm.lower);
                    ngModel.$setValidity('lowercase', testResult);
                    logTestResult(testResult);
                }
                if (scope.vm.numeric) {
                    testResult = scope.vm.containsNumeric(currentValue, scope.vm.numeric);
                    ngModel.$setValidity('numeric', testResult);
                    logTestResult(testResult);
                }
                if (scope.vm.special) {
                    testResult = scope.vm.containsSpecial(currentValue, scope.vm.special);
                    ngModel.$setValidity('special', testResult);
                    logTestResult(testResult);
                }
                if (scope.vm.upper) {
                    testResult = scope.vm.containsUppercase(currentValue, scope.vm.upper);
                    ngModel.$setValidity('uppercase', testResult);
                    logTestResult(testResult);
                }
                scope.vm.update(scope.vm.passed, scope.vm.count);
                scope.$apply();
            });

            function logTestResult(testResult) {
                scope.vm.count += 1;
                if (testResult) {
                    scope.vm.passed += 1;
                }
            }
        }
    }

    function PasswordStrengthController() {
        var vm = this;
        vm.containsLowercase = function (val, count) {
            var regExp = new RegExp('(?=(.*[a-z]){' + checkCount(count) + '})');
            return regExp.test(val);
        };
        vm.containsNumeric = function (val, count) {
            var regExp = new RegExp('(?=(.*[0-9]){' + checkCount(count) + '})');
            return regExp.test(val);
        };
        vm.containsSpecial = function (val, count) {
            var regExp = new RegExp('(?=(.*[`~!@#$%^&*()_\\-\\+={}]){' + checkCount(count) + '})');
            return regExp.test(val);
        };
        vm.containsUppercase = function (val, count) {
            var regExp = new RegExp('(?=(.*[A-Z]){' + checkCount(count) + '})');
            return regExp.test(val);
        };
        vm.isLength = function (val, count) {
            var regExp = new RegExp('(?=(.){' + checkCount(count) + ',}$)');
            return regExp.test(val);
        };

        function checkCount(count) {
            return count > 0 ? count : 1;
        }
    }
})();
