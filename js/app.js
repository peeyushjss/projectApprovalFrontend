angular.module('project_approval_system', ['ngResource', 'ui.router', 'services', 'ngStorage', 'ngFileUpload', '720kb.datepicker',
    'controllers',
    'admin.controller',
    'hod.controller',
    'projectIncharge.controller',
    'internalGuide.controller',
    'student.controller',
    'newUser.controller',
    'updateProfile.controller',
    'userList.controller',
    'test.controller',
    'projects.controller'
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
                            controller: 'projectUploadCtrl'
                        })
                        .state('projectList', {
                            url: '/:userId/projectList',
                            templateUrl: 'module/projects/template.html',
                            controller: 'projectListCtrl'
                        })
                        .state('status', {
                            url: '/:userId/status',
                            templateUrl: 'module/status/template.html',
                            controller: 'statusCtrl'
                        })
                        .state('test', {
                            url: '/test',
                            templateUrl: 'module/test/template.html',
                            controller: 'testCtrl'
                        });
                $urlRouteProvider.otherwise('/home');
            }]);