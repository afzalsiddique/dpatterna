"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherDataCollection_1 = require("./Iterator/WeatherDataCollection");
var weatherDataCollection = new WeatherDataCollection_1.WeatherDataCollection();
weatherDataCollection.addCity("Dhaka");
weatherDataCollection.addCity("Chittagong");
weatherDataCollection.addCity("Rajshahi");
weatherDataCollection.addCity("Khulna");
weatherDataCollection.addCity("Barishal");
weatherDataCollection.addCity("Sylhet");
weatherDataCollection.addCity("Mymensingh");
var iterator = weatherDataCollection.getIterator();
setTimeout(function () {
    while (iterator.hasNext()) {
        iterator.advance();
        var data = iterator.current();
        console.log(data.cityName);
        console.log(data.temperature - 273);
    }
}, 2000);
