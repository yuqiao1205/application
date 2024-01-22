import express from 'express'
// import authRoutes from "./routes/auth.js";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'

const port = 8080

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors())
app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  next()
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal Server Error' })
})

app.listen(port, () => {
  console.log('Connected!')
})
