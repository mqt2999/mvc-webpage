const router = require('express').Router();
const userRoutes = require('./userrouts');
// const blogRouts = require('./blogrout');

router.use('/user', userRoutes)
// router.use('/blog', blogRouts)

module.exports = router;