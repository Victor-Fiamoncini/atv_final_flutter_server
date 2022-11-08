import { RegisterWeatherWithAddressRepository } from 'src/data/repositories/RegisterWeatherWithAddressRepository'
import { MongoInsertError } from 'src/infra/database/mongo/errors/MongoInsertError'
import { MongoClient } from 'src/infra/database/mongo/MongoClient'

export class MongoRegisterWeatherWithAddressRepository implements RegisterWeatherWithAddressRepository.Repository {
  async insertOne(params: RegisterWeatherWithAddressRepository.Params): Promise<void> {
    const predictionsCollection = await MongoClient.getCollection('predictions')

    const result = await predictionsCollection.insertOne(params)

    if (!result.insertedId) {
      throw new MongoInsertError('predictions')
    }
  }
}
