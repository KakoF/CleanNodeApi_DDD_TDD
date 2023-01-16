import { HttpResponse } from '../protocols/http'
import { ServerError } from '../erros'

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const badRequest = (erro: Error): HttpResponse => ({
  statusCode: 400,
  body: erro
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
