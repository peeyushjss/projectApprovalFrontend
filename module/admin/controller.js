(function () {
    'use strict';

    angular.module('admin.controller', [])
            .controller('adminCtrl', function ($scope, $location, $rootScope) {

                $scope.newUser = function () {
                    $location.path('/admin/newUser');
                };

                $scope.userList = function () {
                    $location.path('/admin/userList');
                };

                $scope.projectList = function () {
                    $location.path('/admin/projectList');
                };

            });
})();