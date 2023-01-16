export class InvalidParamErro extends Error {
  constructor (paramName: string){
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamErro'
  }
}
