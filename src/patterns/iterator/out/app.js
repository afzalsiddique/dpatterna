"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherDataCollection_1 = require("./Iterator/WeatherDataCollection");
var APIKEY = "&appid=9dd687e56990c001e77aa23b2db5ab5c";
var weatherDataCollection = new WeatherDataCollection_1.WeatherDataCollection();
weatherDataCollection.addCity("Dhaka");
weatherDataCollection.addCity("Chittagong");
// addCity("Rajshahi");
// addCity("Khulna");
// addCity("Barishal");
// addCity("Sylhet");
// addCity("Mymensingh");
// function addCity(cityName:string){
//     loadJSON(`https://api.openweathermap.org/data/2.5/weather?q=`+cityName+APIKEY).then(data=>{
//         weatherDataCollection.addItem(new WeatherData(data.name,data.main.temp));
//     })
// }
var iterator = weatherDataCollection.getIterator();
setTimeout(function () {
    while (iterator.hasNext()) {
        iterator.advance();
        var data = iterator.current();
        console.log(data.cityName);
        console.log(data.temperature);
    }
}, 2000);
