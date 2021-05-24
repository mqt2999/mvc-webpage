const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {

  const dbBlogs = await Blog.findAll({
    include: [
      {
        model: Comment,
        attributes: ['content'],
        include: [{
          model: User,
          attributes: ["userName"]
        }]
      },
      {
        model: User,
        attributes: ["userName"]
      }
    ],
  })
  const blogpost = dbBlogs.map((post) =>

    post.get({ plain: true })
  );
console.log(blogpost)
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

router.get('/user-dash', withAuth, async (req, res) => {
  try {
    const blog = await Blog.findAll({
      include: [{ model: User }],
      where: {
        user_id: req.session.user_id
      }
    })
    const userBlog = blog.map((post) => {
      return post.get({ plain: true })
    })


    res.render('userdash', { userBlog })
  }
  catch (err) {
    console.error(err)
  }

})

router.get('/user-post/:id', withAuth, async (req, res) => {
  try {
    const userBlog = await Blog.findByPk(req.params.id)
    const user = userBlog.get({ plain: true })
    console.log(user)
    res.render('userpost', { user })
  }
  catch (err) {
    console.error(err)
  }
})
router.get('/blog-post/:id', withAuth, async (req, res) => {
  try {
    const post = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ['content','date_created'],
          include: [{
            model: User,
            attributes: ["userName"]
          }]
        }
      ],
    }
    )


    const blogPost = post.get({ plain: true });
    console.log(blogPost)
    res.render("postpage", { blogPost, logged_in: req.session.logged_in })
  }
  catch (err) {
    console.error(err)

  }
})

router.get('/post-form', withAuth, async (req, res) => {

  res.render('addblog')
})




module.exports = router;