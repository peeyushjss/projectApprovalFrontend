(function () {
    'use strict';

    angular.module('userList.controller', [])
            .controller('userListCtrl', function ($scope, getUserList, $localStorage, $location, deleteUser) {

                $scope.userListdata = {};
                var self = $scope.userListdata;
                $scope.mySpin = true;

                if (angular.isDefined($localStorage.id)) {
                    self.memberId = $localStorage.id;
                }

                $scope.showRecords = function () {
                    if (self.memberId) {
                        $scope.mySpin = false;
                        self.getRecord = getUserList.get();
                        self.getRecord.$promise.then(function (res) {
                            if (res.status === 1) {
                                self.userList = res.details;
                                $scope.mySpin = true;
                            }
                            else {
                                $scope.mySpin = true;
                                alert(res.msg);
                            }
                        });
                    }
                };

                $scope.showRecords();

                $scope.del = function (id) {
                    var deleteRecord = deleteUser.save({memberId: id});
                    deleteRecord.$promise.then(function (res) {
                        if (res.status === 1) {
                            alert('Record Deleted');
                        }
                        $scope.showRecords();
                    });
                };

                $scope.update = function (id) {
                    $location.path('/admin/updateUser/' + id);
                };

//                $scope.submit = function (data) {
//                    $scope.mySpin = false;
//                    self.firstname = data.firstname;
//                    self.lastname = data.lastname;
//                    self.department = data.department;
//                    self.dob = data.dob;
//                    self.address = data.address;
//                    self.contact = data.contact;
//                    self.department = data.department;
//                    self.fathername = data.fathername;
//                    self.mothername = data.mothername;
//                    self.qualification = data.qualification;
//                    self.specialization = data.specialization;
//                    if (typeof data !== 'undefined') {
//                        self.updateRecord = getUserList.save({memberId: self.memberId, firstName: self.firstname,
//                            lastName: self.lastname, department: self.department, dob: self.dob, address: self.address,
//                            contact: self.contact, fatherName: self.fathername, motherName: self.mothername,
//                            qualification: self.qualification, specialization: self.specialization});
//                        self.updateRecord.$promise.then(function (res) {
//                            if (res.status === 1) {
//                                $scope.mySpin = true;
//                                alert(res.msg);
//                                self.firstname = '';
//                                self.lastname = '';
//                                self.department = '';
//                                self.dob = '';
//                                self.address = '';
//                                self.contact = '';
//                                self.department = '';
//                                self.fathername = '';
//                                self.mothername = '';
//                                self.qualification = '';
//                                self.specialization = '';
//                            }
//                            else {
//                                $scope.mySpin = true;
//                                alert(res.msg);
//                            }
//                        });
//                    }
//                    else {
//                        alert('Fill all the fields');
//                    }
//                };

                $scope.back = function () {
                    $location.path('/admin');
                };

            });
})();