"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherDataIterator = void 0;
var WeatherDataIterator = /** @class */ (function () {
    function WeatherDataIterator(collection) {
        this.position = -1;
        this.weatherData = collection;
    }
    WeatherDataIterator.prototype.current = function () {
        return this.weatherData[this.position];
    };
    WeatherDataIterator.prototype.advance = function () {
        this.position++;
    };
    WeatherDataIterator.prototype.hasNext = function () {
        return this.weatherData[this.position + 1] !== undefined;
    };
    return WeatherDataIterator;
}());
exports.WeatherDataIterator = WeatherDataIterator;
