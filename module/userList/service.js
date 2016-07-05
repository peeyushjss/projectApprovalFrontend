(function () {
    'use strict';

    angular.module('userList.controller')

//    SERVICE FOR GETTING USER INFORMATION FROM DATABASE
            .factory('getUserList', function ($resource) {
                return $resource('http://127.0.0.1:3000/getUserList');
            })

//    SERVICE FOR DELETE USER INFORMATION IN DATABASE
            .factory('deleteUser', function ($resource) {
                return $resource('http://127.0.0.1:3000/deleteUser');
            });

})();
