"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loadJson_1 = __importDefault(require("./loadJson"));
var WeatherData_1 = require("./Iterator/WeatherData");
var WeatherDataCollection_1 = require("./Iterator/WeatherDataCollection");
var APIKEY = "&appid=9dd687e56990c001e77aa23b2db5ab5c";
var weatherDataCollection = new WeatherDataCollection_1.WeatherDataCollection();
addCity("Dhaka");
addCity("Chittagong");
addCity("Rajshahi");
addCity("Khulna");
addCity("Barishal");
addCity("Sylhet");
addCity("Mymensingh");
function addCity(cityName) {
    loadJson_1.default("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + APIKEY).then(function (data) {
        weatherDataCollection.addItem(new WeatherData_1.WeatherData(data.name, data.main.temp));
    });
}
var iterator = weatherDataCollection.getIterator();
setTimeout(function () {
    while (iterator.hasNext()) {
        iterator.advance();
        var data = iterator.current();
        console.log(data.cityName);
        console.log(data.temperature);
    }
}, 2000);
