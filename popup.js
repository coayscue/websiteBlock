var app = angular.module('BlockSite', []);

app.controller("MainController", function($scope, $http, $sce, $timeout) {
    $scope.save = function() {
        chrome.storage.local.set({websites: $scope.websites, password: $scope.password}, function() {
        });
    }

    chrome.storage.local.get(['websites', 'password'], function(result) {
        $timeout(function() {
            $scope.websites = result.websites;
            $scope.password = result.password
        });
    });
});