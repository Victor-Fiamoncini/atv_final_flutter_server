import { RegisterWeatherWithAddressUseCase } from 'src/domain/usecases/RegisterWeatherWithAddressUseCase'
import { Controller } from 'src/presentation/contracts/Controller'
import { HttpRequest } from 'src/presentation/http/HttpRequest'
import { created, HttpResponse, serverError } from 'src/presentation/http/HttpResponse'

export class RegisterWeatherWithAddressController implements Controller {
  constructor(private readonly registerWeatherWithAddressUseCase: RegisterWeatherWithAddressUseCase.UseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = httpRequest
      const { street, neighborhood, city, state, country, postalCode } = body.address
      const { maxTemperature, minTemperature, mainTemperature, humidity, clouds, windSpeed } = body.weather

      await this.registerWeatherWithAddressUseCase.registerWeatherAndAddress({
        address: {
          street,
          neighborhood,
          city,
          state,
          country,
          postalCode,
        },
        weather: {
          maxTemperature,
          minTemperature,
          mainTemperature,
          humidity,
          clouds,
          windSpeed,
        },
      })

      return created()
    } catch (err) {
      serverError(err)
    }
  }
}
