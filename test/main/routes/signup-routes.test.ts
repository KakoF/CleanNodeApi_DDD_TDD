import request from 'supertest'
import app from '../../../src/main/config/app'
describe('SignUp Routes', () => {
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
