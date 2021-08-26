import {WeatherDataIterator} from "./WeatherDataIterator";

const APIKEY=`&appid=9dd687e56990c001e77aa23b2db5ab5c`
import {WeatherData} from "./WeatherData";
import loadJSON from "../loadJson";


export class WeatherDataCollection{
    private items: WeatherData[] = [];

    public getItems(): WeatherData[] {
        return this.items;
    }


    public addItem(item: WeatherData): void {
        this.items.push(item);
    }

    public getIterator(): WeatherDataIterator {
       return new WeatherDataIterator(this.items);
    }

    public addCity(cityName:string){
        loadJSON(`https://api.openweathermap.org/data/2.5/weather?q=`+cityName+APIKEY).then(data=>{
        this.addItem(new WeatherData(data.name,data.main.temp));
    })
    }
}
