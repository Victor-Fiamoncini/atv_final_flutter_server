export class WeatherEntity {
  constructor(
    private readonly maxTemperature: number,
    private readonly minTemperature: number,
    private readonly mainTemperature: number,
    private readonly humidity: number,
    private readonly clouds: number,
    private readonly windSpeed: number
  ) {}
}
