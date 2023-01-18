import { AddAccountRepository } from '../../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../../domain/models/account'
import { AddAccountModel } from '../../../../../domain/usecases/add-account'
import { MongoHelper } from '../mongo-helper'

export class AccountMongoRepository implements AddAccountRepository{
  async add (accountData: AddAccountModel): Promise<AccountModel>{
    const collection = MongoHelper.getCollection('accounts')
    const result = await collection.insertOne({ ...accountData })
    return MongoHelper.mapId(accountData, result.insertedId)
  }
}
