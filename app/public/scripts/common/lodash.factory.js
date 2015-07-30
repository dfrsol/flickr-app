
(function(){
    'use strict';

    var lodash = function(window){

        return window._;
    };

    lodash.$inject = ['$window'];

    angular
        .module('flickrApp.common')
        .factory('lodash', lodash)
})();