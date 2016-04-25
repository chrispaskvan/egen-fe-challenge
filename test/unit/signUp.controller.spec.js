/**
 * Created by chris on 4/24/16.
 */
'use strict';
describe('signUpController', function(){
    var $controllerConstructor;

    beforeEach(module('EgenSolutions'));

    beforeEach(inject(function($controller) {
        $controllerConstructor = $controller;
    }));
    it('should ....', inject(function() {
        var ctrl = $controllerConstructor('SignUpController');
        ctrl.updateProgress(3, 5);
        expect(ctrl.progress.color).toEqual("yellow");
    }));
});