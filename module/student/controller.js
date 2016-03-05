(function () {
    'use strict';

    angular.module('student.controller', [])
            .controller('studentCtrl', function ($scope, $location, $localStorage) {

                var userId = $localStorage.id;

                $scope.updateProfile = function () {
                    $location.path('/' + userId + '/updateProfile');
                };

                $scope.projects = function () {
                    $location.path('/' + userId + '/project');
                };

            });
})();