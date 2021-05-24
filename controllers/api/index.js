const router = require('express').Router();
const userRoutes = require('./userRoute');
const blogRoutes = require('./blogRoute');
const commentRoutes = require('./commentRoute')

router.use('/user', userRoutes)
router.use('/blog-post', blogRoutes)
router.use('/comments', commentRoutes)

module.exports = router;