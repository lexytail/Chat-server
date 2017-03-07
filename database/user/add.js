let add = user => {

  let
    mngs = require('mongoose'),
    User = require('./model'),
    db = mngs.connect(require('../config'))

  return new Promise((res, rej) =>

      new User(user).save((err, data) =>

        err ? rej(err) : res(data)
    
  ))

  db.disconnect()

}

module.exports = add