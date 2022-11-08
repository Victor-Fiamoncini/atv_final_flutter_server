export class WeatherEntity {
  constructor(
    readonly maxTemperature: number,
    readonly minTemperature: number,
    readonly mainTemperature: number,
    readonly humidity: number,
    readonly clouds: number,
    readonly windSpeed: number
  ) {}
}
