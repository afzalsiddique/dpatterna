"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherDataCollection_1 = require("./Iterator/WeatherDataCollection");
var weatherDataCollection = new WeatherDataCollection_1.WeatherDataCollection();
var alphas;
alphas = ["Dhaka", "Chittagong", "Rajshahi", "Barisal", "Sylhet", "Khulna"];
alphas.forEach(function (value) {
    weatherDataCollection.addCity(value);
});
var iterator = weatherDataCollection.getIterator();
setTimeout(function () {
    while (iterator.hasNext()) {
        iterator.advance();
        var data = iterator.current();
        console.log(data.cityName);
        console.log(data.temperature - 273);
    }
}, 2000);
