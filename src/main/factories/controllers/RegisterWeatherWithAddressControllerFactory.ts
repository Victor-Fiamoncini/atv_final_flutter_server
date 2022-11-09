import { makeRegisterWeatherWithAddressUseCase } from 'src/main/factories/usecases/RegisterWeatherWithAddressUseCaseFactory'
import { makeRegisterWeatherWithAddressValidator } from 'src/main/factories/validators/RegisterWeatherWithAddressValidatorFactory'
import { Controller } from 'src/presentation/contracts/Controller'
import { RegisterWeatherWithAddressController } from 'src/presentation/controllers/RegisterWeatherWithAddressController'

export const makeRegisterWeatherWithAddressController = (): Controller => {
  const registerWeatherWithAddressValidator = makeRegisterWeatherWithAddressValidator()
  const registerWeatherWithAddressUseCase = makeRegisterWeatherWithAddressUseCase()

  return new RegisterWeatherWithAddressController(
    registerWeatherWithAddressValidator,
    registerWeatherWithAddressUseCase
  )
}
