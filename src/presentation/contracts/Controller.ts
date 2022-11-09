import { HttpRequest } from 'src/presentation/http/HttpRequest'
import { HttpResponse } from 'src/presentation/http/HttpResponse'

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>
}
