import cors from 'cors'
import express, { Express } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { MongoClient } from 'src/infra/database/mongo/MongoClient'
import { makeRegisterWeatherWithAddressController } from 'src/main/factories/controllers/RegisterWeatherWithAddressControllerFactory'

const env = {
  port: 3333,
  mongoUrl: 'mongodb://localhost:27017/atv_final_flutter_server_mongo',
}

const initRoutes = (app: Express) => {
  const registerWeatherWithAddressController = makeRegisterWeatherWithAddressController()

  app.post('/api/predictions', async (req, res) => {
    const httpRequest = { body: req.body }
    const httpResponse = await registerWeatherWithAddressController.handle(httpRequest)

    return res.status(httpResponse.statusCode).json(httpResponse?.body)
  })
}

const initApp = async () => {
  try {
    await MongoClient.connect(env.mongoUrl)

    const app = express()

    app.use(helmet())
    app.use(cors())
    app.use(express.json())
    app.use(morgan('dev'))

    initRoutes(app)

    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  } catch (err) {
    console.log(err)
  }
}

initApp()
