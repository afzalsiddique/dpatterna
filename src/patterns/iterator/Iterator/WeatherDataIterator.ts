import {WeatherData} from "./WeatherData";
import {Iterator} from "./Iterator";



export class WeatherDataIterator implements Iterator<WeatherData> {
    private weatherData: WeatherData[];

    private position: number = -1;


    constructor(collection: WeatherData[]) {
        this.weatherData = collection;
    }


    public current(): WeatherData {
        return this.weatherData[this.position];
    }


    public advance() :void{
       this.position++;
    }

    public hasNext(): boolean {
        return this.weatherData[this.position+1]!==undefined;
    }

}