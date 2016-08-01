(function() {
    'use strict';

    angular
        .module('bolgApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController ($scope ) {
        var vm = this;
        vm.isPhone = navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad|SymbianOS)/i);

    }
})();