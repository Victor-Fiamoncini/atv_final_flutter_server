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

      await this.registerWeatherWithAddressUseCase.registerWeatherAndAddress({
        address: {
          street: body?.address?.street,
          neighborhood: body?.address?.neighborhood,
          city: body?.address?.city,
          state: body?.address?.state,
          country: body?.address?.country,
          postalCode: body?.address?.postalCode,
        },
        weather: {
          maxTemperature: body?.weather?.maxTemperature,
          minTemperature: body?.weather?.minTemperature,
          mainTemperature: body?.weather?.mainTemperature,
          feelsLike: body?.weather?.feelsLike,
          humidity: body?.weather?.humidity,
          clouds: body?.weather?.clouds,
          windSpeed: body?.weather?.windSpeed,
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
