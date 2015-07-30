(function(){
    'use strict';

    var FeedFactory = function($http, $q, _){
        var feedService = {};

        feedService.loadFeed = function(page,numOfItems) {
            var deferred = $q.defer();
            //132365033@N08 || 55814174@N02
            $http.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos', {
                    params: {
                        api_key:'a5e95177da353f58113fd60296e1d250',
                        user_id:'55814174@N02',
                        format:'json',
                        nojsoncallback:1,
                        extras:'date_upload,date_taken,owner_name,tags,views,machine_tags',
                        per_page:numOfItems,
                        page:page

                    }
                })
                .success(function (response) {
                    var flickrItems = _.map(response.photos.photo, updateFlickrObj);
                    deferred.resolve(flickrItems);
                })
                .error(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        };

        function updateFlickrObj (obj){
            var pageUrl = 'https://www.flickr.com/photos/' + obj.owner + '/' + obj.id + '/';
            var imagePath = 'https://farm' + obj.farm + '.staticflickr.com/' + obj.server + '/' + obj.id + '_' + obj.secret + '_m.jpg';
            obj.imageUrl = imagePath;
            obj.pageUrl = pageUrl;
            return obj;
        }

        return feedService;
    };

    FeedFactory.$inject = ['$http', '$q', 'lodash'];


    angular
        .module('flickrApp.feed')
        .factory('FeedFactory', FeedFactory)
})();