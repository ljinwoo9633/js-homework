"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Homework_1 = __importDefault(require("./Homework"));
var main = function () {
    var HOMEWORK = new Homework_1.default(process.argv[3], process.argv[4]);
    if (process.argv[2] === 'read') {
        HOMEWORK.ReadData();
        return 0;
    }
    else if (process.argv[2] === 'write') {
        HOMEWORK.WriteData();
        return 0;
    }
    else if (process.argv[2] === 'help') {
        HOMEWORK.Help();
        return 0;
    }
    else {
        HOMEWORK.Help();
        return 0;
    }
};
main();
