"use strict";
var HomeworkMath = /** @class */ (function () {
    function HomeworkMath() {
        this.GetPower = function (number, exp) {
            if (exp) {
                var result = 1;
                for (var index = 0; index < exp; index++) {
                    result = result * number;
                }
                return result;
            }
            else {
                return number * number;
            }
        };
    }
    HomeworkMath.prototype.GetMultiply = function () {
        var result = 1;
        for (var index = 0; index < arguments.length; index++) {
            result = result * arguments[index];
        }
        return result;
    };
    return HomeworkMath;
}());
var HOMEWORK_CLASS = new HomeworkMath();
console.log(HOMEWORK_CLASS.GetPower(2));
console.log(HOMEWORK_CLASS.GetPower(2, 3));
console.log(HOMEWORK_CLASS.GetMultiply(1, 2, 3, 4, 5));
