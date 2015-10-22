/**
 * Created by jann551c on 19/10/15.
 */
(function(){
"use strict";


angular.module('mediaApp',[])
    .controller('mainController', mainController);
        function mainController($scope) {

            $scope.picture = {
                fileId: "1",
                fileName: "Budweiser",
                priceType: "fuld pris",
                weekDay: "friday",
                timeStamp: "00.00-05.00"

            }
        }

})();
