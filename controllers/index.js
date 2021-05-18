const router = require('express').Router();
const apiRoutes = require('./api');
const login = require('./loginRout')
const home = require('./homerout')
router.use('/api', apiRoutes);
router.use('/login', login);
router.use('/', home);
module.exports = router;