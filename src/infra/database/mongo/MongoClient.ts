import { Collection, MongoClient as Client } from 'mongodb'

export class MongoClient {
  private static client?: Client
  private static url?: string

  static async connect(url: string): Promise<void> {
    this.url = url
    this.client = await Client.connect(url)
  }

  static async disconnect(): Promise<void> {
    await this.client?.close()

    this.client = null
  }

  static async getCollection(name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect(this.url)
    }

    return this.client.db().collection(name)
  }
}
