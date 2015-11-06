/**
 * Created by jann551c on 24/10/15.
 */

(function(){



        function menuController($scope, $location) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        }


    angular
        .module("mediaApp.menu", [])
        .controller("menuController", menuController)
}());