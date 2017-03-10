let send = (sender, recipient, text) => {

  let
    mngs = require('mongoose'),
    db = mngs.connect( require('../config') )
    Message = require('./model')

  return new Promise((res, rej) =>

    new Message({
      sender,
      recipient,
      text
    }).save(err => err ? rej(err) : res())

  )
  

}

module.exports = send