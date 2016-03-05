/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('project_approval_system', ['ngResource', 'ui.router', 'services', 'controllers', 'ngStorage', 'ngFileUpload',
    'admin.controller',
    'hod.controller',
    'projectIncharge.controller',
    'internalGuide.controller',
    'student.controller',
    'newUser.controller',
    'newUser.service',
    'updateProfile.controller',
    'updateProfile.service',
    'ui.bootstrap.datetimepicker',
    'userList.controller',
    'userList.service',
    'test.controller',
    'projects.controller',
    'projects.service'
])
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouteProvider) {
                $stateProvider
                        .state('home', {
                            url: '/home',
                            templateUrl: 'partials/login.html',
                            controller: 'loginCtrl'
                        })
                        .state('admin', {
                            url: '/admin',
                            templateUrl: 'module/admin/template.html',
                            controller: 'adminCtrl'
                        })
                        .state('newUser', {
                            url: '/admin/newUser',
                            templateUrl: 'module/newUser/template.html',
                            controller: 'newUserCtrl'
                        })
                        .state('userList', {
                            url: '/admin/userList',
                            templateUrl: 'module/userList/template.html',
                            controller: 'userListCtrl'
                        })
                        .state('updateUser', {
                            url: '/admin/updateUser/:id',
                            templateUrl: 'module/newUser/template.html',
                            controller: 'newUserCtrl'
                        })
                        .state('projectIncharge', {
                            url: '/projectIncharge',
                            templateUrl: 'module/projectIncharge/template.html',
                            controller: 'projectInchargeCtrl'
                        })
                        .state('internalGuide', {
                            url: '/internalGuide',
                            templateUrl: 'module/internalGuide/template.html',
                            controller: 'internalGuideCtrl'
                        })
                        .state('hod', {
                            url: '/hod',
                            templateUrl: 'module/hod/template.html',
                            controller: 'hodCtrl'
                        })
                        .state('student', {
                            url: '/student',
                            templateUrl: 'module/student/template.html',
                            controller: 'studentCtrl'
                        })
                        .state('updateProfile', {
                            url: '/:userId/updateProfile',
                            templateUrl: 'module/updateProfile/template.html',
                            controller: 'updateProfileCtrl'
                        })
                        .state('project', {
                            url: '/:userId/project',
                            templateUrl: 'module/projects/template.html',
                            controller: 'projectCtrl'
                        })
                        .state('test', {
                            url: '/test',
                            templateUrl: 'module/test/template.html',
                            controller: 'testCtrl'
                        });
                $urlRouteProvider.otherwise('/home');
            }]);