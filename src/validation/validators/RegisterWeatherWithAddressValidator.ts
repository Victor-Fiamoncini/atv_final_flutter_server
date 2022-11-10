import { ObjectValidator } from 'src/validation/contracts/ObjectValidator'
import { ValidationError } from 'src/validation/errors/ValidationError'
import * as Yup from 'yup'

export class RegisterWeatherWithAddressValidator implements ObjectValidator {
  private readonly validationSchema = Yup.object().shape({
    address: Yup.object().shape({
      street: Yup.string().nullable().typeError('Invalid street'),
      neighborhood: Yup.string().nullable().typeError('Invalid neighborhood'),
      city: Yup.string().nullable().typeError('Invalid city'),
      state: Yup.string().nullable().typeError('Invalid state'),
      country: Yup.string().nullable().typeError('Invalid country'),
      postalCode: Yup.string().nullable().typeError('Invalid postal code'),
    }),
    weather: Yup.object().shape({
      maxTemperature: Yup.number().nullable().typeError('Invalid max temperature'),
      minTemperature: Yup.number().nullable().typeError('Invalid min temperature'),
      mainTemperature: Yup.number().nullable().typeError('Invalid temperature'),
      humidity: Yup.number().nullable().typeError('Invalid humidity'),
      clouds: Yup.number().nullable().typeError('Invalid clouds'),
      windSpeed: Yup.number().nullable().typeError('Invalid wind speed'),
    }),
  })

  async validate(data: object): Promise<object | void> {
    try {
      await this.validationSchema.validate(data)
    } catch (err) {
      throw new ValidationError(err.message)
    }
  }
}
