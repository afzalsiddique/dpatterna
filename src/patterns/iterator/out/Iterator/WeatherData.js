"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherData = void 0;
var WeatherData = /** @class */ (function () {
    function WeatherData(name, temperature) {
        this._cityName = name;
        this._temperature = temperature;
    }
    Object.defineProperty(WeatherData.prototype, "cityName", {
        get: function () {
            return this._cityName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherData.prototype, "temperature", {
        get: function () {
            return this._temperature;
        },
        enumerable: false,
        configurable: true
    });
    return WeatherData;
}());
exports.WeatherData = WeatherData;
