import bcrypt from 'bcrypt'
import { BcryptAdapter } from '../../../src/infra/criptography/bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string>{
    return await new Promise(resolve => { resolve('hash') })
  }
}))

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter()
}

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct value', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', 12)
  })

  test('Should return hash on success', async () => {
    const sut = makeSut()
    const hashed = await sut.encrypt('any_value')
    expect(hashed).toBe('hash')
  })

  test('Should throw if Bcrypt throws', async () => {
    const sut = makeSut()
    // jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(new Promise((resolve, reject) => { reject(new Error()) }))
    jest.spyOn(bcrypt, 'hash').mockImplementationOnce(() => {
      throw new Error()
    })
    const promise = sut.encrypt('any_value')
    await expect(promise).rejects.toThrow()
  })
})
