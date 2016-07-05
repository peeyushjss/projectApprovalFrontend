(function () {
    'use strict';

    angular.module('status.controller', [])
            .controller('statusCtrl', function ($scope, $localStorage, $location) {

                $scope.back = function () {
                    $location.path('/student');
                };

            });
})();