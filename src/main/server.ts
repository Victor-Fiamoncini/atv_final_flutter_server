import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const initApp = async () => {
  try {
    const env = { port: 3333 }
    const app = express()

    app.use(helmet())
    app.use(express.json())
    app.use(morgan('dev'))

    app.get('/', (req, res) => res.json('helloooooooooo'))

    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  } catch (err) {
    console.log(err)
  }
}

initApp()
