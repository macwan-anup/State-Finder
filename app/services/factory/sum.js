/**
 * Created by anupm on 2/1/2017.
 */
app.factory('sumFactory', function() {

    var obj = {};
    obj.doSum = function (num1,num2) {
        return parseInt(num1) + parseInt(num2);
    }
    return obj;


});