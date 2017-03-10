let
  express = require('express'),
  router = express.Router(),
  User = require('../database/user/model'),
  addUser = require('../database/user/add')

router.post('/user/signup', (req, res) => // Обработчик Регистрации
  User.findOne({ email: req.body.email }, // Ищем пользователей с таким же email
    (err, user) => err
      ? res.send('Ошибка при поиске пользователя в бд:', err)
      : user
        ? res.send('Пользователь с такой почтой уже зарегестрирован!')
        : addUser(req.body)
          .then(data => res.json({ success: true, body: data })) // Ответ: Успешно + Данные пользователя (200)
          .catch(err => res.json({ success: false, body: err })) // Ответ: Ошибка + Ошибка (200)
))

router.post('/user/signin', (req, res) => // Обработчик авторизации
  User.findOne(req.body, // Ищем пользователя по введенным данным
    (err, user) => err
      ? res.send({ success: false, body: err }) // Ответ: Ошибка + Ошибка (200)
      : res.send({ success: true, body: user.token }) // Ответ: Успешно + Токен (200)
))

module.exports = route // Экспортируем созданый роутер