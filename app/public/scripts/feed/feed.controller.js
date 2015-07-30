(function(){
    'use strict';

    var FeedController = function($scope, FeedFactory){

        $scope.feedState = {
            numItemsToDisplay:15,
            items:[],
            currentPage:0,
            loadMoreButton: false
        };

        $scope.loadFeed = function(){

            $scope.feedState.currentPage++;

            FeedFactory.loadFeed($scope.feedState.currentPage, $scope.feedState.numItemsToDisplay)
                .then(function(response){

                    $scope.feedState.loadMoreButton = response.length >= $scope.feedState.numItemsToDisplay;

                    $scope.feedState.items = $scope.feedState.items.concat(response);
                })
                .catch(function(response){
                    console.log(response);
                });
        };
        // init
        $scope.loadFeed();
    };

    FeedController.$inject = ['$scope', 'FeedFactory'];

    angular
        .module('flickrApp.feed')
        .controller('FeedController', FeedController)
})();