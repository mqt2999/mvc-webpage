const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/add-post', async (req, res) => {
    try{
      const addPost = await Blog.create({
        ...req.body,
        user_id: req.session.user_id
      })
      res.status(200).json(addPost);
    }
    catch(err){
        console.error(err)
        res.status(400).json(err);
    }
  })

router.delete('/:id',async (req,res) => {
    const blogData = await Blog.destroy({
        where:{
            id: req.params.id,
            user_id: req.session.user_id
        }
    })
    res.status(200).json(blogData);
})

router.put('/:id', withAuth, async (req, res) => {
   Blog.update(req.body, {
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
  })
  .then((updatedGroup) => res.json(updatedGroup))
  .catch((err) => {
    console.error(err);
    res.status(400).json(err);
  })
});



module.exports = router;