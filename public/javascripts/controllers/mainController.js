/**
 * Created by jann551c on 19/10/15.
 */

(function(){
'use strict';


    /*function instaService($http, instaService){
        var getFeed = function(){
            instaService.getFeed();

            var feed = new Instafeed({
                get: 'tagged',
                tagName: 'learnapi',
                accessToken: '2248076206.3cf36ca.484622fb5ff9416eb02bf6dda09d2c6b'
            });
            feed.run();
        };

        return {
            getFeed: getFeed
        }

    } */

    function mainController($scope){
        $scope.hello = 'say hello';
    }

    angular
        .module("mediaApp.main",[])
        .controller("mainController", function($scope){
            $scope.signOn = function(username, password) {

            };
        });
        //.factory("instaService", instaService);



   /* function instaService($http){
        var getFeed = function(){
            var feed = new Instafeed({
                get: 'tagged',
                tagName: 'learnapi',
                accessToken: '2248076206.3cf36ca.484622fb5ff9416eb02bf6dda09d2c6b'
            });
            feed.run();
        };

        return {
            getFeed: getFeed
        }

    } */

}());
