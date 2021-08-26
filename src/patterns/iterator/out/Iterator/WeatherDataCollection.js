"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherDataCollection = void 0;
var WeatherDataIterator_1 = require("./WeatherDataIterator");
var WeatherDataCollection = /** @class */ (function () {
    function WeatherDataCollection() {
        this.items = [];
    }
    WeatherDataCollection.prototype.getItems = function () {
        return this.items;
    };
    WeatherDataCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    WeatherDataCollection.prototype.getIterator = function () {
        return new WeatherDataIterator_1.WeatherDataIterator(this.items);
    };
    return WeatherDataCollection;
}());
exports.WeatherDataCollection = WeatherDataCollection;
