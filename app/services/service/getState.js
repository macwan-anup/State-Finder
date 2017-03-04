/**
 * Created by anupm on 2/1/2017.
 */
app.service("stateService",function ($http) {

    this.getState = function (countryCode,stateCode,callBack) {

        $http({
            method: 'GET',
            url: 'http://services.groupkt.com/state/get/'+countryCode+'/'+stateCode
        }).then(function successFn(response) {
            callBack(response);
        },function errorFn(response) {
            console.log(response);
        });

    };



});
