export class WeatherData{
   private _cityName:string;
    private _temperature: number;

    get cityName(): string {
        return this._cityName;
    }

    get temperature(): number {
        return this._temperature;
    }

    constructor(name: string, temperature: number) {
        this._cityName = name;
        this._temperature = temperature;
    }

}