let
  express = require('express'),
  router = express.Router()

router.use( require('./sign') )
router.use('/message', require('./message') )

module.exports = router