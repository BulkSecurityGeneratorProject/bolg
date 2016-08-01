(function() {
    'use strict';

    angular
        .module('bolgApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('home', {
            parent: 'app',
            url: '/',
            data: {
                authorities: [],
                pageTitle: '微步'
            },
            views: {
                'content@': {
                    templateUrl: 'app/common/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();