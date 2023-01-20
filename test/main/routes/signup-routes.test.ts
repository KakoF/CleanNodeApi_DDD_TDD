import request from 'supertest'
import { MongoHelper } from '../../../src/infra/db/mongodb/helpers/mongo-helper'
import app from '../../../src/main/config/app'
import { MongoMemoryServer } from 'mongodb-memory-server'

describe('SignUp Routes', () => {
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
  test('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Kako',
        email: 'kako@gmail.com',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
  })
})
