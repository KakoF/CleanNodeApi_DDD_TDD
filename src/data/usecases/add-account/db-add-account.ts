import { AccountModel, AddAccount, AddAccountModel, AddAccountRepository, Encrypter } from './db-add-account-protocols'
export class DbAddAccount implements AddAccount{
  private readonly _encrypter: Encrypter
  private readonly _addAccountRepository: AddAccountRepository
  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this._encrypter = encrypter
    this._addAccountRepository = addAccountRepository
  }

  async add (account: AddAccountModel): Promise<AccountModel>{
    const hashedPassword = await this._encrypter.encrypt(account.password)
    return await this._addAccountRepository.add(Object.assign({}, account, { password: hashedPassword }))
  }
}
