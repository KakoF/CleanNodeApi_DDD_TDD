import { Router } from 'express'
import { adapterRoute } from '../adapters/express-route-adapter'
import { signUpController } from '../factories/signup'

export default (router: Router): void => {
  router.post('/signup', adapterRoute(signUpController()))
}
