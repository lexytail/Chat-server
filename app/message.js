let
  express = require('express'),
  router = express.Router(),
  Message = require('../database/message/model'),
  sendMessage = require('../database/message/send'),
  getMessage = require('../database/message/get')

router.post('/send', (req, res) => sendMessage(req.body)
  .then(data => res.send({ success: true, body: data }))
  .catch(err => res.send({ success: false, body: err }))
)

router.post('/get', req, res => getMessage(req.body)
  .then(data => res.send({ success: true, body: data }))
  .catch(err => res.send({ success: false, body: err }))  
)
module.exports = router