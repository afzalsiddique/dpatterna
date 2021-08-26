"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherDataCollection = void 0;
var WeatherDataIterator_1 = require("./WeatherDataIterator");
var APIKEY = "&appid=9dd687e56990c001e77aa23b2db5ab5c";
var WeatherData_1 = require("./WeatherData");
var loadJson_1 = __importDefault(require("../loadJson"));
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
    WeatherDataCollection.prototype.addCity = function (cityName) {
        var _this = this;
        loadJson_1.default("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + APIKEY).then(function (data) {
            _this.addItem(new WeatherData_1.WeatherData(data.name, data.main.temp));
        });
    };
    return WeatherDataCollection;
}());
exports.WeatherDataCollection = WeatherDataCollection;
