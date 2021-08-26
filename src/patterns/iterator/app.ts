import loadJSON from "./loadJson";
import {WeatherData} from "./Iterator/WeatherData";
import {WeatherDataCollection} from "./Iterator/WeatherDataCollection";


const weatherDataCollection = new WeatherDataCollection();

weatherDataCollection.addCity("Dhaka");
weatherDataCollection.addCity("Chittagong");
weatherDataCollection.addCity("Rajshahi");
weatherDataCollection.addCity("Khulna");
weatherDataCollection.addCity("Barishal");
weatherDataCollection.addCity("Sylhet");
weatherDataCollection.addCity("Mymensingh");




const iterator = weatherDataCollection.getIterator();
setTimeout(()=>{
    while (iterator.hasNext()){
        iterator.advance();
        const data = iterator.current();
        console.log(data.cityName);
        console.log(data.temperature);

    }
},2000)