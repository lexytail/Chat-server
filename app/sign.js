let
  express = require('express'),
  router = express.Router(),
  User = require('../database/user/model'),
  addUser = require('../database/user/add')

router.post('/user/signup', (req, res) =>
  User.findOne({ email: req.body.email }, (err, user) => err
    ? res.send('Ошибка при поиске пользователя в бд:', err)
    : user
      ? res.send('Пользователь с такой почтой уже зарегестрирован!')
      : addUser(req.body)
        .then(data => res.json({ success: true, body: data }))
        .catch(err => res.json({ success: false, body: err }))
))

router.post('/user/signin', (req, res) =>
  User.findOne(req.body, (err, user) => err
    ? res.send({ success: false, body: err })
    : res.send({ success: true, body: user.token })
))

module.exports = router