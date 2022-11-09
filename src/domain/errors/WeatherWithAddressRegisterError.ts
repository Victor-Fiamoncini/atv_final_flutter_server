export class WeatherWithAddressRegisterError extends Error {
  constructor() {
    super('Error to register weather and address')

    this.name = 'WeatherWithAddressRegisterError'
  }
}
