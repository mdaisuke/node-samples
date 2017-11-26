import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()
const port = 3001
const dbUrl = 'mongodb://localhost/crud'

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(dbUrl, dbErr => {
  if (dbErr) throw new Error(err)
  else console.log('db connected')

  app.post('/api/characters', (req, resp) => {
    console.log('receive POST request')
    console.log(req.body)
    resp.status(200).send()
  })

  app.listen(port, err => {
    if (err) throw new Error(err)
    else console.log(`listening on port ${port}`)
  })
})

