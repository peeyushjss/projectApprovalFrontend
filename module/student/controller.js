(function () {
    'use strict';

    angular.module('student.controller', [])
            .controller('studentCtrl', function ($scope, $location) {


                $scope.updateProfile = function () {
                    $location.path('/student/updateProfile');
                };

            });
})();