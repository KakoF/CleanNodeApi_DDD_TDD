import { AddAccount } from '../../domain/usecases/add-account'
import { MissingParamError, InvalidParamErro } from '../erros'
import { badRequest, serverError } from '../helpers/http-helpers'
import { HttpRequest, HttpResponse, EmailValidator, Controller } from './protocols'

export class SignUpController implements Controller {
  private readonly _emailValidator: EmailValidator
  private readonly _addAccount: AddAccount

  constructor (emailValidator: EmailValidator, addAccount: AddAccount){
    this._emailValidator = emailValidator
    this._addAccount = addAccount
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    const { name, email, password, passwordConfirmation } = httpRequest.body
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields){
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      if (password !== passwordConfirmation){
        return badRequest(new InvalidParamErro('passwordConfirmation'))
      }
      const valid = this._emailValidator.isValid(email)
      if (!valid){
        return badRequest(new InvalidParamErro('email'))
      }

      this._addAccount.add({ name, email, password })

      return badRequest(new InvalidParamErro(''))
    } catch (error) {
      return serverError()
    }
  }
}
