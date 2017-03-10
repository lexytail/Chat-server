let get = option => {

  let
    mngs = require('mongoose'),
    db = mngs.connection(require('../config')),
    Message = require('./model')

  return new Promise((res, rej) =>

    Message.find(
      {
        sender: option.sender,
        recipient: option.recipient
      },
      (err, data) => err ? rej(err) : res(data)
  
  ))
  
}

module.exports = get