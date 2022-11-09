import { RegisterWeatherWithAddressRepository } from 'src/data/repositories/RegisterWeatherWithAddressRepository'
import { MongoClient } from 'src/infra/database/mongo/MongoClient'

export class MongoRegisterWeatherWithAddressRepository implements RegisterWeatherWithAddressRepository.Repository {
  async insertOne(params: RegisterWeatherWithAddressRepository.Params): Promise<boolean> {
    try {
      const predictionsCollection = await MongoClient.getCollection('predictions')

      const result = await predictionsCollection.insertOne(params)

      return !!result.insertedId
    } catch {
      return false
    }
  }
}
