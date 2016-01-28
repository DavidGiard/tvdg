// Code goes here
var app = angular.module("myApp", []);


app.controller("episodeController", function ($scope, $http, $sce, $location) {

    $scope.episodeSortOrder = "id";
    $scope.sortDirection = "-";
    $scope.maxEpisodesDisplayed = 8;

    //var dateFilter = '$filter=month(publishDate) eq 5 and year(publishDate) eq 2014';

    //var yearFilter = $location.search().year;

    var filterByYear = function () {
        var x = 1;
    };

    // TODO: Get month and year from querystring param


    var req = $http({
        method: 'GET',
        url: 'https://dgtvmobile.azurewebsites.net/tables/episode?',
        headers: {
            'ZUMO-API-VERSION': '2.0.0'
        }
    })
      .then(function successCallback(response, status, headers, config) {
          //set view model or do something.
          //this.episodes = data;
          $scope.episodes = response.data;
      });

    $scope.GetUrl = function (url) {
        return $sce.trustAsResourceUrl(url + '/player');
    };

});