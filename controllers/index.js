const router = require('express').Router();
const apiRoutes = require('./api')
const home = require('./homerout')
router.use('/api', apiRoutes);
router.use('/', home);
module.exports = router;