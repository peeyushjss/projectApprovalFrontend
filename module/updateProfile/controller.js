(function () {
    'use strict';

    angular.module('updateProfile.controller', [])
            .controller('updateProfileCtrl', function ($scope, setProfileDetails, $localStorage, getProfileDetails, $location) {

                $scope.updateProfiledata = {};
                var self = $scope.updateProfiledata;
                $scope.mySpin = true;

                if (angular.isDefined($localStorage.id)) {
                    self.memberId = $localStorage.id;
                }

                if (self.memberId) {
                    $scope.mySpin = false;
                    self.getRecord = getProfileDetails.save({member_id: self.memberId});
                    self.getRecord.$promise.then(function (res) {
                        if (res.status === 1) {
                            var response = res.details;
                            $scope.mySpin = true;
                            self.firstname = response.firstName;
                            self.lastname = response.lastName;
                            self.department = response.department;
                            self.dob = response.dob;
                            self.address = response.address;
                            self.contact = response.contact;
                            self.department = response.department;
                            self.fathername = response.fatherName;
                            self.mothername = response.motherName;
                            self.qualification = response.qualification;
                            self.specialization = response.specialization;
                        }
                        else {
                            $scope.mySpin = true;
                            alert(res.msg);
                        }
                    });
                }

                $scope.submit = function (data) {
                    $scope.mySpin = false;
                    self.firstname = data.firstname;
                    self.lastname = data.lastname;
                    self.department = data.department;
                    self.dob = data.dob;
                    self.address = data.address;
                    self.contact = data.contact;
                    self.department = data.department;
                    self.fathername = data.fathername;
                    self.mothername = data.mothername;
                    self.qualification = data.qualification;
                    self.specialization = data.specialization;
                    if (typeof data !== 'undefined') {
                        self.updateRecord = setProfileDetails.save({memberId: self.memberId, firstName: self.firstname,
                            lastName: self.lastname, department: self.department, dob: self.dob, address: self.address,
                            contact: self.contact, fatherName: self.fathername, motherName: self.mothername,
                            qualification: self.qualification, specialization: self.specialization});
                        self.updateRecord.$promise.then(function (res) {
                            if (res.status === 1) {
                                $scope.mySpin = true;
                                alert(res.msg);
                                self.firstname = '';
                                self.lastname = '';
                                self.department = '';
                                self.dob = '';
                                self.address = '';
                                self.contact = '';
                                self.department = '';
                                self.fathername = '';
                                self.mothername = '';
                                self.qualification = '';
                                self.specialization = '';
                            }
                            else {
                                $scope.mySpin = true;
                                alert(res.msg);
                            }
                        });
                    }
                    else {
                        alert('Fill all the fields');
                    }
                };

                $scope.back = function () {
                    $location.path('/student');
                };

            });
})();