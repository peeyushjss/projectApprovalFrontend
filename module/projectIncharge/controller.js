(function () {
    'use strict';

    angular.module('projectIncharge.controller', [])
            .controller('projectInchargeCtrl', function ($scope, $location) {

                $scope.updateProfile = function () {
                    $location.path('/projectIncharge/updateProfile');
                };

            });
})();
