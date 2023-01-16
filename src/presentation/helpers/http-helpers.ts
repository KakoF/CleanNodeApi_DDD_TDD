import { HttpResponse } from '../controller/protocols/http'
import { ServerError } from '../erros/server-error'

export const badRequest = (erro: Error): HttpResponse => ({
  statusCode: 400,
  body: erro
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
