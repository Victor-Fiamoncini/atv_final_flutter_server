import express from 'express'

const initApp = async () => {
  try {
    const env = { port: 3333 }
    const app = express()

    app.get('/', (req, res) => res.json('helloooooooooo'))

    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  } catch (err) {
    console.error(err)
  }
}

initApp()
