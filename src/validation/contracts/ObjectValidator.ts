export interface ObjectValidator {
  validate(data: object): Promise<object | void>
}
