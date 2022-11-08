import { AddressEntity } from 'src/domain/entities/AddressEntity'
import { WeatherEntity } from 'src/domain/entities/WeatherEntity'

export namespace RegisterWeatherWithAddressUseCase {
  export type Params = {
    address: AddressEntity
    weather: WeatherEntity
  }

  export interface UseCase {
    registerWeatherAndAddress(params: Params): Promise<void>
  }
}
