var angular = require("angular");
var MainController = require("./controllers/MainController");

angular.module("dueDateCalculator", []);

angular.module("dueDateCalculator")
    .controller("mainController", function($scope) {
        $scope.testData = "testData";
    });