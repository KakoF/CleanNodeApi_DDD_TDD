import { Express } from 'express'
import { bodyParserJson, contentType, cors } from '../middlewares'
export default (app: Express): void => {
  app.use(bodyParserJson)
  app.use(cors)
  app.use(contentType)
}
