const { Blog, User, Comment } = require('../models');

const router = require('express').Router();



router.get('/', async (req, res) => {

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



module.exports = router;