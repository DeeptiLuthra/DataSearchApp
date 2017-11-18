//App.js

"use strict";
angular.module("SearchApp", ["ngRoute"])
    .constant("AppNgConstants",
    {
        "DataApiUrl": "/api/Data/"
    })
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/Angular/Views/SearchAccounts.html",
                controller: "SearchDataController"

            })
            .when("/Test", {
                templateUrl: "/Angular/Views/TestPage.html",
                controller: "SearchDataController"

            })
            .otherwise({ redirectTo: '/' });

        // use the HTML5 History API
        $locationProvider.html5Mode(true)
    });



