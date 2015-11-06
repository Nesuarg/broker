/**
 * Created by jann551c on 21/10/15.
 */
(function(){
    "use strict";

    var mediaApp = angular

        .module("mediaApp",[
                "ngRoute","mediaApp.feedService", "mediaApp.main", "mediaApp.menu"]
                )
        .config(function($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/', {
                    templateUrl: '/partials/',
                    controller: 'mainController'
                });
                //.otherwise({ redirectTo: '/' });

        })
})();