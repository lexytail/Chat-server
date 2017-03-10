let
  express = require('express'),
  router = express.Router()

router.use( require('./sign') ) // Подключаем роутер регистрации\авторизации
router.use('/message', require('./message') ) // Подключаем роутер сообщений

module.exports = router // Экспортируем собраный роутер