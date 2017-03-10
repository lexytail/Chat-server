let
  express = require('express'),
  router = express.Router(),
  Message = require('../database/message/model'),
  sendMessage = require('../database/message/send'),
  getMessage = require('../database/message/get')

router.post('/send', (req, res) => sendMessage(req.body) // Обрабочик отправки письма
  .then(data => res.send({ success: true, body: data })) // Ответ: Успешно (200)
  .catch(err => res.send({ success: false, body: err })) // Ответ: Ошибка + Ошибка (200)
)

router.post('/get', req, res => getMessage(req.body) // Обработчик списка писем
  .then(data => res.send({ success: true, body: data })) // Ответ: Успешно + Письма (200)
  .catch(err => res.send({ success: false, body: err })) // Ответ: Ошибка + Ошибка (200)
)
module.exports = router // Экспортируем созданый роутер