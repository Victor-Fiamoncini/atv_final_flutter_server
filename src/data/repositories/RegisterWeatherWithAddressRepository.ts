import { AddressModel } from 'src/data/models/AddressModel'
import { WeatherModel } from 'src/data/models/WeatherModel'

export namespace RegisterWeatherWithAddressRepository {
  export type Params = {
    address: AddressModel
    weather: WeatherModel
  }

  export interface Repository {
    insertOne(params: Params): Promise<boolean>
  }
}
