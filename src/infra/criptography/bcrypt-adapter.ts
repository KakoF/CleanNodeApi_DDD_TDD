import bcrypt from 'bcrypt'
import { Encrypter } from '../../data/protocols/encrypter'

export class BcryptAdapter implements Encrypter{
  private readonly _salt: number
  constructor () {
    this._salt = 12
  }

  async encrypt (value: string): Promise<string>{
    return await bcrypt.hash(value, this._salt)
  }
}
