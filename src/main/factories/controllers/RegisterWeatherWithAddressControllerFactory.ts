import { makeRegisterWeatherWithAddressUseCase } from 'src/main/factories/usecases/RegisterWeatherWithAddressUseCaseFactory'
import { Controller } from 'src/presentation/contracts/Controller'
import { RegisterWeatherWithAddressController } from 'src/presentation/controllers/RegisterWeatherWithAddressController'

export const makeRegisterWeatherWithAddressController = (): Controller => {
  const registerWeatherWithAddressUseCase = makeRegisterWeatherWithAddressUseCase()

  return new RegisterWeatherWithAddressController(registerWeatherWithAddressUseCase)
}
