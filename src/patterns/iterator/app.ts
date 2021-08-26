import loadJSON from "./loadJson";
import {WeatherData} from "./Iterator/WeatherData";
import {WeatherDataCollection} from "./Iterator/WeatherDataCollection";
const APIKEY=`&appid=9dd687e56990c001e77aa23b2db5ab5c`


const weatherDataCollection = new WeatherDataCollection();

addCity("Dhaka");
addCity("Chittagong");
addCity("Rajshahi");
addCity("Khulna");
addCity("Barishal");
addCity("Sylhet");
addCity("Mymensingh");


function addCity(cityName:string){
    loadJSON(`https://api.openweathermap.org/data/2.5/weather?q=`+cityName+APIKEY).then(data=>{
        weatherDataCollection.addItem(new WeatherData(data.name,data.main.temp));
    })
}


const iterator = weatherDataCollection.getIterator();
setTimeout(()=>{
    while (iterator.hasNext()){
        iterator.advance();
        const data = iterator.current();
        console.log(data.cityName);
        console.log(data.temperature);

    }
},2000)