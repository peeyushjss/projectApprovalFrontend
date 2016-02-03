(function () {
    'use stric';

    angular.module('hod.controller', [])
            .controller('hodCtrl', function ($scope, $location) {

                $scope.updateProfile = function () {
                    $location.path('/hod/updateProfile');
                };

            });
})();