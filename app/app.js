'use strict';

// Declare app level module which depends on views, and components
(function () {
    var app = angular.module('myApp', []);

    app.controller("PageController",['$scope', '$http', function ($scope, $http) {
        $http.get("./data.json").success(function (data) {
                //sort

                $scope.data=data;
            });
        }]);


})();
