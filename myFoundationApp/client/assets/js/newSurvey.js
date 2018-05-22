var app = angular.module('newSurvey', []);
app.controller('newSurvey', function newSurvey($scope, $http) {
    $scope.myStatus = "";
    $scope.myData = [];
    $scope.newSurvey = function() {
        var data = {
            title: $scope.Title,
            description: $scope.Description
        };
        var baseUrl = 'http://localhost:5000/survey';
        var jsondata = JSON.stringify(data);
        var config = {
            method: "POST",
            url: baseUrl,
            data: jsondata,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        };
        return $http(config)
            .then(function SuccessCallback(response) {
                $scope.myStatus = response.statusText;
                $scope.myData = response.data;
                alert("Message from server: ( " + $scope.myStatus + " )\n" +
                    $scope.myData.Title + " was created succesfully");
            }, function errorCallback(response) {
                $scope.myData = response.data;
                $scope.myStatus = response.status;
            });
    }
});