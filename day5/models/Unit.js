"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Unit = /** @class */ (function () {
    function Unit(name, mineral, gas, supply, description, profile) {
        var _this = this;
        this.name = '';
        this.mineral = 0;
        this.gas = 0;
        this.supply = 0;
        this.description = '';
        this.profile = '';
        this.GetName = function () {
            return _this.name;
        };
        this.GetMineral = function () {
            return _this.mineral;
        };
        this.GetGas = function () {
            return _this.gas;
        };
        this.GetSupply = function () {
            return _this.supply;
        };
        this.GetDescription = function () {
            return _this.description;
        };
        this.GetProfile = function () {
            return _this.profile;
        };
        this.name = name;
        this.mineral = mineral;
        this.gas = gas;
        this.supply = supply;
        this.description = description;
        this.profile = profile;
    }
    return Unit;
}());
exports.default = Unit;
