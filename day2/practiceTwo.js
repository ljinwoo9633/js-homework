"use strict";
var GetMinNumberInArrayUsingMath = function (array) {
    var min = Math.min.apply(null, array);
    return min;
};
var GetMaxNumberInArrayUsingMath = function (array) {
    var max = Math.max.apply(null, array);
    return max;
};
var GetMaxNumberUsingBoringMethod = function (array) {
    var max = array[0];
    for (var index = 0; index < array.length; index++) {
        if (max < array[index]) {
            max = array[index];
        }
    }
    return max;
};
var GetMinNumberUsingBoringMethod = function (array) {
    var min = array[0];
    for (var index = 0; index < array.length; index++) {
        if (min > array[index]) {
            min = array[index];
        }
    }
    return min;
};
var array = [273, 52, 103, 57, 271];
var min = GetMinNumberUsingBoringMethod(array);
var max = GetMaxNumberUsingBoringMethod(array);
var minUsingMath = GetMinNumberInArrayUsingMath(array);
var maxUsingMath = GetMaxNumberInArrayUsingMath(array);
console.log("min: " + min);
console.log("max: " + max);
console.log("min using math: " + minUsingMath);
console.log("max using math: " + maxUsingMath);
