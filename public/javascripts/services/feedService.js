(function(){
"use strict";



    angular
        .module("mediaApp.feedService",[])
        .factory("feedService", feedService);

    function feedService($http) {
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
    }




}());






/*
 var access_token = "2248076206.3cf36ca.484622fb5ff9416eb02bf6dda09d2c6b",
 access_parameters = {
 access_token: access_token
 };

 var form = $('#tagsearch');
 form.on('submit', function(ev) {
 var q = this.tag.value;
 if(q.length) {
 //console.log(q);
 grabImages(q, 40, access_parameters);
 }
 ev.preventDefault();
 });

 function grabImages(tag, count, access_parameters) {
 var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=' + count;
 $.getJSON(instagramUrl, access_parameters, onDataLoaded);
 }

 function onDataLoaded(instagram_data) {
 var target = $("#target");
 //console.log(instagram_data);
 if (instagram_data.meta.code == 200) {
 var photos = instagram_data.data;
 //console.log(photos);
 if (photos.length > 0) {
 target.empty();
 for (var key in photos) {
 var photo = photos[key];
 target.append('<a href="' + photo.link + '"><img src="' + photo.images.thumbnail.url + '"></a>')
 }
 } else {
 target.html("nothing found");
 }
 } else {
 var error = instagram_data.meta.error_message;
 target.html(error);
 }
 }

 grabImages('unicorn', 40, access_parameters);


///////
(fu




nction(){





    "use strict";



        var instaservice= function($http){
            var getFeed= function(){
                console.log("feed");
            };

            return{
                getFeed: getFeed
            }



        };

    angular.module('mediaApp')
        .factory("instaservice", instaservice);

})(); */