'use strict';

angular.module('cloudxWebApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('sessions', {
                parent: 'account',
                url: '/sessions',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'global.menu.account.sessions'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/account/sessions/sessions.html',
                        controller: 'SessionsController'
                    }
                }
            });
    });
