export class MongoInsertError extends Error {
  constructor(readonly collection: string) {
    super(`Error to insert data in collection: ${collection}`)

    this.name = 'MongoInsertError'
  }
}
