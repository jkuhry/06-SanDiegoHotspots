 (function() {
     'use strict';

     angular
         .module('app')
         .controller('MainController', MainController);

     MainController.$inject = ['$http'];

     /* @ngInject */
     function MainController($http) {
         var vm = this;
         vm.title = 'MainController';

         activate();

         ////////////////

         function activate() {
             $http.get('app/topspots.json').then(function(response) {
                 vm.topspots = response.data;

             });
         }
     }
 })();


 
