import loadJSON from "./loadJson";
import {WeatherData} from "./Iterator/WeatherData";
import {WeatherDataCollection} from "./Iterator/WeatherDataCollection";


const weatherDataCollection = new WeatherDataCollection();

var cities:string[];
cities = ["Dhaka","Chittagong","Rajshahi","Barisal","Sylhet", "Khulna"]

cities.forEach(function (value) {
    weatherDataCollection.addCity(value)
});



const iterator = weatherDataCollection.getIterator();
setTimeout(()=>{
    while (iterator.hasNext()){
        iterator.advance();
        const data = iterator.current();
        console.log(data.cityName);
        console.log(data.temperature-273);

    }
},2000)