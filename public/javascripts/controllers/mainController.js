/**
 * Created by jann551c on 19/10/15.
 */
"use strict";

mediaApp.controller('mediaApp',
    function MainController($scope) {

        $scope.picture = {
            fileId: 1,
            fileName: "Budweiser",
            priceType: "fuld pris",
            weekDay: "friday",
            timeStamp: "00.00-05.00"

        }
    }
);
