import { Collection, MongoClient, ObjectId } from 'mongodb'

export const MongoHelper = {
  _client: null as unknown as MongoClient,
  async connect (url: string): Promise<void> {
    this._client = await MongoClient.connect(url)
  },

  async disconnect (){
    await this._client.close()
  },

  getCollection (nameCollection: string): Collection{
    return this._client.db().collection(nameCollection)
  },

  mapId (collection: any, _id: ObjectId): any{
    return Object.assign({}, collection, { id: _id.toString() })
  }
}
