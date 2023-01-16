import { MissingParamError, InvalidParamErro } from '../erros'
import { badRequest, serverError } from '../helpers/http-helpers'
import { HttpRequest, HttpResponse, EmailValidator, Controller } from './protocols'

export class SignUpController implements Controller {
  private readonly _emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator){
    this._emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields){
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const valid = this._emailValidator.isValid(httpRequest.body.email)
      if (!valid){
        return badRequest(new InvalidParamErro('email'))
      }

      return badRequest(new InvalidParamErro(''))
    } catch (error) {
      return serverError()
    }
  }
}
