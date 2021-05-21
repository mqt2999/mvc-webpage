const router = require('express').Router();
const userRoutes = require('./userRoute');
const blogRoutes = require('./blogRoute');

router.use('/user', userRoutes)
// router.use('/blog-post', blogRoutes)

module.exports = router;