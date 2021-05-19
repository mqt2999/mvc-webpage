const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
router.get('/',withAuth, async (req, res) => {

  const dbBlogs = await Blog.findAll({
    include: [
      {
        model: Comment,
        attributes: ['content'],
        include:[{
            model:User,
            attributes: ["userName"]
          }]
      },
      {
        model:User,
        attributes: ["userName"]
      }
    ],})
  const blogpost = dbBlogs.map((post) =>

    post.get({ plain: true })
  );

  res.render('homepage', { blogpost });
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/dash',(res,req) => {
 res.render()
})

module.exports = router;