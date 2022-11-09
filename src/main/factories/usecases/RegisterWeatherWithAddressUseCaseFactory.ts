import { DbRegisterWeatherWithAddressUseCase } from 'src/data/usecases/DbRegisterWeatherWithAddressUseCase'
import { RegisterWeatherWithAddressUseCase } from 'src/domain/usecases/RegisterWeatherWithAddressUseCase'
import { MongoRegisterWeatherWithAddressRepository } from 'src/infra/database/mongo/repositories/MongoRegisterWeatherWithAddressRepository'

export const makeRegisterWeatherWithAddressUseCase = (): RegisterWeatherWithAddressUseCase.UseCase => {
  const registerWeatherWithAddressRepository = new MongoRegisterWeatherWithAddressRepository()

  return new DbRegisterWeatherWithAddressUseCase(registerWeatherWithAddressRepository)
}
