(function () {
    'use strict';

    angular.module('projects.controller', [])
            .controller('projectUploadCtrl', function ($scope, $localStorage, $location, Upload, getProjectDetail, getProjectList) {

                $scope.projectinfo = {};
                var self = $scope.projectinfo;
                self.mySpin = true;
                self.type = 'project';
                $scope.projectUploadShow = true;

                if ($localStorage.id) {
                    self.projectDetail = getProjectDetail.get({userId: $localStorage.id});
                    self.projectDetail.$promise.then(function (res) {
                        if (res.details.length > 0) {
                            var record = res.details[0];
                            self.name = record.project_name;
                            self.introduction = record.project_description;
                        }
                        else {
                            self.name = '';
                            self.introduction = '';
                        }
                    });
                }

                $scope.uploadProject = function (info) {
                    self.mySpin = false;
                    var file = info.docFile;
                    var id = $localStorage.id;
                    var name = info.name;
                    var type = info.type;
                    var intro = info.introduction;
                    if (id && name && type && intro) {
                        file.upload = Upload.upload({
                            url: 'http://127.0.0.1:3000/saveProject',
                            data: {file: file, id: id, name: name, type: type, intro: intro}
                        });
                        file.upload.then(function (response) {
                            if (response.data.status === 1) {
                                self.mySpin = true;
                                $scope.filename = response.data.filename;
                                $scope.filepath = response.data.filepath;
                                self.name = '';
                                self.introduction = '';
                                self.docFile = '';
                                alert('Project Uploaded...!!');
                            }
                            else {
                                alert(response.data.error);
                            }
                        });
                    }
                    else {
                        alert('Fill all the fields');
                    }
                };

                self.getProject = getProjectList.get();
                self.getProject.$promise.then(function (res) {
                    if (res.status === 1) {
                        self.projectList = res.details;
                        $scope.mySpin = true;
                    }
                    else {
                        $scope.mySpin = true;
                        self.projectList = {};
                    }
                });

                $scope.back = function () {
                    $location.path('/admin');
                };

            })
            .controller('projectListCtrl', function ($scope, $localStorage, $location, Upload, getProjectDetail, getProjectList) {

                $scope.projectList = {};
                var self = $scope.projectList;
                self.mySpin = true;
//                self.type = 'project';
                $scope.projectListShow = true;

                self.getProject = getProjectList.get();
                self.getProject.$promise.then(function (res) {
                    if (res.status === 1) {
                        self.projectList = res.details;
                        $scope.mySpin = true;
                    }
                    else {
                        $scope.mySpin = true;
                        self.projectList = {};
                    }
                });

                $scope.back = function () {
                    $location.path('/admin');
                };

            });

})();


