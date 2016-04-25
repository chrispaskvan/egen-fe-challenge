/**
 * Created by chris on 4/24/16.
 */
(function () {
    'use strict';
    angular.module(egenSolutions.globals.appName)
        .directive('egenSemanticPopup', egenSemanticPopup);

    function egenSemanticPopup() {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };
        return directive;
        function linkFunc(scope, element, attrs) {
            $(element).popup();
        }
    }
})();
