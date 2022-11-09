import { ServerError } from 'src/presentation/errors/ServerError'

export interface HttpResponse {
  statusCode: 201 | 500
  body?: any
}

export const created = (data?: any): HttpResponse => ({ statusCode: 201, body: data })

export const serverError = (err: Error): HttpResponse => ({ statusCode: 500, body: new ServerError(err.stack) })
