let remove = user => {

  let
    mngs = require('mongoose'),
    User = require('./model'),
    db = mngs.connect(require('../config'))

  return new Promise((res, rej) =>

      User.remove(user, err =>

        err ? rej(err) : res()
    
  ))

  db.disconnect()

}

module.exports = remove