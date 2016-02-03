(function () {
    'use strict';

    angular.module('updateProfile.service', [])
//            SERVICE FOR SETTING PROFILE INFORMATION IN DATABASE
            .factory('setProfileDetails', function ($resource) {
                return $resource('http://127.0.0.1:3000/updateProfile');
            })

//    SERVICE FOR GETTING PROFILE INFORMATION FROM DATABASE
            .factory('getProfileDetails', function ($resource) {
                return $resource('http://127.0.0.1:3000/getProfile');
            });

})();
