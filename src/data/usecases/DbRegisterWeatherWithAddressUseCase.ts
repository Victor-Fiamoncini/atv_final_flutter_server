import { RegisterWeatherWithAddressRepository } from 'src/data/repositories/RegisterWeatherWithAddressRepository'
import { WeatherWithAddressRegisterError } from 'src/domain/errors/WeatherWithAddressRegisterError'
import { RegisterWeatherWithAddressUseCase } from 'src/domain/usecases/RegisterWeatherWithAddressUseCase'

export class DbRegisterWeatherWithAddressUseCase implements RegisterWeatherWithAddressUseCase.UseCase {
  constructor(private readonly registerWeatherWithAddressRepository: RegisterWeatherWithAddressRepository.Repository) {}

  async registerWeatherAndAddress(params: RegisterWeatherWithAddressUseCase.Params): Promise<void> {
    const wasInserted = await this.registerWeatherWithAddressRepository.insertOne(params)

    if (!wasInserted) {
      throw new WeatherWithAddressRegisterError()
    }
  }
}
