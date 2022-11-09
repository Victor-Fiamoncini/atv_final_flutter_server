import { RegisterWeatherWithAddressUseCase } from 'src/domain/usecases/RegisterWeatherWithAddressUseCase'
import { Controller } from 'src/presentation/contracts/Controller'
import { HttpRequest } from 'src/presentation/http/HttpRequest'
import { badRequest, created, HttpResponse, serverError } from 'src/presentation/http/HttpResponse'
import { ObjectValidator } from 'src/validation/contracts/ObjectValidator'
import { ValidationError } from 'src/validation/errors/ValidationError'

export class RegisterWeatherWithAddressController implements Controller {
  constructor(
    private readonly registerWeatherWithAddressValidator: ObjectValidator,
    private readonly registerWeatherWithAddressUseCase: RegisterWeatherWithAddressUseCase.UseCase
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = httpRequest

      await this.registerWeatherWithAddressValidator.validate(body)

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
      if (err instanceof ValidationError) {
        return badRequest(err)
      }

      return serverError(err)
    }
  }
}
