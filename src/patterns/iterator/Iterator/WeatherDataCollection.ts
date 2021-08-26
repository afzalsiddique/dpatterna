import {WeatherDataIterator} from "./WeatherDataIterator";

import {WeatherData} from "./WeatherData";


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


}
