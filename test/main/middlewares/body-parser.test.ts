import request from 'supertest'
import app from '../../../src/main/config/app'

describe('Body Parser Middleware', () => {
  test('should parser body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send({ name: 'test' })
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'test' })
      .expect({ name: 'test' })
  })
})
