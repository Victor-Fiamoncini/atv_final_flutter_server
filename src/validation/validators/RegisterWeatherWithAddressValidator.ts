import { ObjectValidator } from 'src/validation/contracts/ObjectValidator'
import { ValidationError } from 'src/validation/errors/ValidationError'
import * as Yup from 'yup'

export class RegisterWeatherWithAddressValidator implements ObjectValidator {
  private readonly validationSchema = Yup.object().shape({
    address: Yup.object().shape({
      street: Yup.string().required('Address street is required').typeError('Invalid street'),
      neighborhood: Yup.string().required('Address neighborhood is required').typeError('Invalid neighborhood'),
      city: Yup.string().required('Address city is required').typeError('Invalid city'),
      state: Yup.string().required('Address state is required').typeError('Invalid state'),
      country: Yup.string().required('Address country is required').typeError('Invalid country'),
      postalCode: Yup.string().required('Address postal code is required').typeError('Invalid postal code'),
    }),
    weather: Yup.object().shape({
      maxTemperature: Yup.number().required('Weather max temperature is required').typeError('Invalid max temperature'),
      minTemperature: Yup.number().required('Weather min temperature is required').typeError('Invalid min temperature'),
      mainTemperature: Yup.number().required('Weather temperature is required').typeError('Invalid temperature'),
      humidity: Yup.number().required('Weather humidity is required').typeError('Invalid humidity'),
      clouds: Yup.number().required('Weather clouds is required').typeError('Invalid clouds'),
      windSpeed: Yup.number().required('Weather wind speed is required').typeError('Invalid wind speed'),
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
