/**
 * Created by anupm on 2/1/2017.
 */
app.service("sumService",function () {
    this.doSum = function (num1,num2) {
        return parseInt(num1) + parseInt(num2);
    }
});