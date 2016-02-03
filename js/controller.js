//**************** THIS IS LOGIN CONTROLLER USED FOR LOGIN ********************

(function () {
    'use strict';

    angular.module('controllers', [])
            .controller('loginCtrl', function ($scope, Login, $location, $localStorage) {
                $scope.login = function (data) {
                    var memberId = data.memberId;
                    var password = data.password;
                    var login = Login.save({memberId: memberId, password: password});
                    login.$promise.then(function (res) {
                        var role = res.role;
                        if (res.status === 1) {
                            $localStorage.id = memberId;
                            alert(res.msg);
                            switch (role) {
                                case 'admin' :
                                    $location.path('/admin');
                                    break;
                                case 'projectIncharge' :
                                    $location.path('/projectIncharge');
                                    break;
                                case 'hod' :
                                    $location.path('/hod');
                                    break;
                                case 'internalGuide' :
                                    $location.path('/internalGuide');
                                    break;
                                case 'student' :
                                    $location.path('/student');
                                    break;
                            }
                        }
                        else if (res.status === 0) {
                            alert(res.msg);
                        }
                    });

                };

            });
})()
