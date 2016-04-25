/**
 * Created by chris on 4/24/16.
 */
(function () {
    'use strict';
    angular.module(egenSolutions.globals.appName)
        .directive('egenSemanticProgress', egenSemanticProgress);

    function egenSemanticProgress() {
        var directive = {
            restrict: 'E',
            link: linkFunc,
            replace: true,
            scope: {
                percentage: '@',
                color: '@'
            },
            templateUrl: '/templates/semantic/progress.html'
        };
        return directive;
        function linkFunc($scope, $element, $attrs) {
            $attrs.$observe('percentage', function() {
                $($element).progress({
                    percent: $scope.percentage
                });
            });
        }
    }
})();
