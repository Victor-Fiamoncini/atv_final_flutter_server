import cors from 'cors'
import * as dotenv from 'dotenv'
import express, { Router } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import { MongoClient } from 'src/infra/database/mongo/MongoClient'
import { makeRegisterWeatherWithAddressController } from 'src/main/factories/controllers/RegisterWeatherWithAddressControllerFactory'

const initRoutes = (router: Router) => {
  const registerWeatherWithAddressController = makeRegisterWeatherWithAddressController()

  router.post('/predictions', async (req, res) => {
    const httpRequest = { body: req.body }
    const httpResponse = await registerWeatherWithAddressController.handle(httpRequest)

    return res.status(httpResponse.statusCode).json(httpResponse?.body)
  })
}

const initApp = async () => {
  try {
    dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env.local') })

    const env = {
      port: process.env.SERVER_PORT,
      mongoUrl: process.env.MONGODB_URL,
    }

    await MongoClient.connect(env.mongoUrl)

    const app = express()
    const router = Router()

    app.use(helmet())
    app.use(cors())
    app.use(express.json())
    app.use(morgan('dev'))
    app.use('/api', router)

    initRoutes(router)

    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  } catch (err) {
    console.log(err)
  }
}

initApp()
