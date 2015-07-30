(function(){
    'use strict';

    var feed = function () {
        return {
            template: '<li ng-repeat="item in feedState.items track by $index">'+ '<div class="ibm-flickr-img-container">'
                    + '<a ng-href="{{item.pageUrl}}" target="_blank">'
                        + '<div class="ibm-flickr-img" style="background-image:url(\'{{item.imageUrl}}\')"></div>'
                    + '</a>'
                    + '<div class="ibm-flickr-img-views">Views {{item.views}}</div>'
                    + '<div class="ibm-flickr-ownername">{{item.ownername}}</div>'
                +'</div>'
            + '<h5>{{item.title|limitTo:30}}</h5>'
            + '</li>',
            replace:true
        }
    };

    angular
        .module('flickrApp.feed')
        .directive('feed', [feed]);
})();