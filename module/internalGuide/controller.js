(function () {
    'use strict';

    angular.module('internalGuide.controller', [])
            .controller('internalGuideCtrl', function ($scope, $location) {

                $scope.updateProfile = function () {
                    $location.path('/internalGuide/updateProfile');
                };

            });
})();