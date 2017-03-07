let
  express = require('express'),
  router = express.Router()

router.use( require('./sign') )

module.exports = router