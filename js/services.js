(function () {
    'use strict';

    angular.module('services', [])
            .factory('Login', function ($resource) {
                return $resource("http://127.0.0.1:3000/login");
            });
})();