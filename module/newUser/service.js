(function () {
    'use strict';

    angular.module('newUser.controller')
            .factory('saveUser', function ($resource) {
                return $resource('http://127.0.0.1:3000/saveUser');
            })

            .factory('getUser', function ($resource) {
                return $resource('http://127.0.0.1:3000/getUser');
            })

            .factory('updateUser', function ($resource) {
                return $resource('http://127.0.0.1:3000/updateUser');
            });
})();

