let
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  router = require('./app'),
  app = express()

require('./app/config')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)

app.listen(8082, () => console.log('Сервер запущен. Порт 8082'))