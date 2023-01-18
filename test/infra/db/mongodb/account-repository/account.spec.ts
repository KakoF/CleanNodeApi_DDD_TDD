import { AccountMongoRepository } from '../../../../../src/infra/db/mongodb/helpers/account-repository/account'
import { MongoHelper } from '../../../../../src/infra/db/mongodb/helpers/mongo-helper'
import { MongoMemoryServer } from 'mongodb-memory-server'

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    const mongod = await MongoMemoryServer.create()
    const mongoUri = mongod.getUri()
    await MongoHelper.connect(mongoUri)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountsCollection = MongoHelper.getCollection('accounts')
    await accountsCollection.deleteMany({})
  })

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository()
  }

  test('Should return an Account on success', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.email).toEqual('any_email@mail.com')
    expect(account.password).toEqual('any_password')
  })
})
