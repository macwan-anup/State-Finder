/**
 * Created by anupm on 2/1/2017.
 */
app.controller('mainAppCtrl',["$scope", "stateService", function ($scope, stateService) {


$scope.changeCountry = function () {
    stateService.getState($scope.countryCode,"all",function (response) {
        $scope.data = response.data.RestResponse.result;

    });
}
    $scope.changeCountry();

}]);