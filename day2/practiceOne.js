"use strict";
var PrintTower = function (floor) {
    var emptyNumber = floor;
    for (var i = 1; i <= floor; i++) {
        var dotNumber = (2 * i);
        var empty = new Array(emptyNumber).join(' ');
        var dots = new Array(dotNumber).join('*');
        console.log(empty, dots);
        emptyNumber = emptyNumber - 1;
    }
};
PrintTower(8);
