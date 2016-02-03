(function () {
    'use strict';

    angular.module('newUser.controller', [])
            .controller('newUserCtrl', function ($scope, saveUser, $location, $stateParams, getUser, updateUser) {

                if ($stateParams.id) {
                    $('#saveUser').hide();
                    $scope.updateUserdata = {};
                    var myself = $scope.updateUserdata;
                    var getUserInfo = getUser.save({id: $stateParams.id});
                    getUserInfo.$promise.then(function (res) {
                        myself.mySpin = true;
                        var response = res.details;
                        myself.memberId = response[0].member_id;
                        myself.firstname = response[0].firstName;
                        myself.lastname = response[0].lastName;
                        myself.role = response[0].role;
                        myself.department = response[0].department;
                        myself.password = response[0].password;
                        myself.cpassword = response[0].password;
                    });

                    $scope.updateUser = function (data) {
                        self.mySpin = false;
                        var role = data.role;
                        var firstname = data.firstname;
                        var lastname = data.lastname;
                        var department = data.department;
                        var memberId = data.memberId;
                        var password = data.password;
                        var cpassword = data.cpassword;
                        if (password === cpassword) {
                            var updateUserDetails = updateUser.save({memberId: memberId, firstname: firstname,
                                lastname: lastname, role: role, department: department, password: password});
                            updateUserDetails.$promise.then(function (res) {
                                if (res.status === 1) {
                                    self.mySpin = true;
                                    alert(res.msg);
                                    $location.path('/admin/userList')
                                }
                                else {
                                    alert('Record not Updated.');
                                }
                            });
                        }
                        else {
                            alert('Enter the same password');
                        }
                    };
                }
                else {
                    $('#updateUser').hide();
                }

                $scope.newUserdata = {};
                var self = $scope.newUserdata;
                self.mySpin = true;
                $scope.createUser = function (data) {
                    if (typeof data !== 'undefined') {
                        self.mySpin = false;
                        var firstname = data.firstname;
                        var lastname = data.lastname;
                        var role = data.role;
                        var department = data.department;
                        var password = data.password;
                        var cpassword = data.cpassword;
                        if (firstname && lastname && role && department && password) {
                            if (password === cpassword) {
                                var saveRecord = saveUser.save({firstName: firstname, lastName: lastname, role: role, department: department,
                                    password: password});
                                saveRecord.$promise.then(function (res) {
                                    if (res.status === 1) {
                                        self.mySpin = true;
                                        alert(res.msg);
                                        $location.path('/admin');
                                    }
                                    else if (res.status === 0) {
                                        self.mySpin = true;
                                        alert(res.msg);
                                    }
                                });
                            }
                            else {
                                self.mySpin = true;
                                alert("Password doesn't match");
                            }
                        }
                        else {
                            alert('Fill all the fields');
                        }
                    }
                    else {
                        alert('Fill the Form.');
                    }
                };

                $scope.back = function () {
                    $location.path('/admin');
                };

            });
})();