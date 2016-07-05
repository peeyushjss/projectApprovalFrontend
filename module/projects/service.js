(function () {
    'use strict';

    angular.module('projects.controller')
//            SERVICE FOR GETTING PROJECT INFORMATION OF A PERTICULAR USER
            .factory('getProjectDetail', function ($resource) {
                return $resource('http://127.0.0.1:3000/getProjectList/:userId', {userId: '@id'});
            })


//    SERVICE FOR GETTING PROJECT LIST FROM DATABASE
            .factory('getProjectList', function ($resource) {
                return $resource('http://127.0.0.1:3000/getProjectList');
            });

//    SERVICE FOR GETTING PROFILE INFORMATION FROM DATABASE
//            .factory('getUserList', function ($resource) {
//                return $resource('http://127.0.0.1:3000/getUserList');
//            });
})();
