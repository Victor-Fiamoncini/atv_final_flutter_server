import { ObjectValidator } from 'src/validation/contracts/ObjectValidator'
import { RegisterWeatherWithAddressValidator } from 'src/validation/validators/RegisterWeatherWithAddressValidator'

export const makeRegisterWeatherWithAddressValidator = (): ObjectValidator => new RegisterWeatherWithAddressValidator()
