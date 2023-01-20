import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/helpers/account-repository/account'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'

export const signupControllerFactory = (): SignUpController => {
  const emailValidator = new EmailValidatorAdapter()
  const encrypter = new BcryptAdapter()
  const addAccountRepository = new AccountMongoRepository()
  const addAccount = new DbAddAccount(encrypter, addAccountRepository)
  return new SignUpController(emailValidator, addAccount)
}
