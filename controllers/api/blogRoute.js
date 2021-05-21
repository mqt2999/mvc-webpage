const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req,res)=>{
    try{
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(newBlog)
    }
    catch(err){
        console.error(err)
        res.status(400).json(err);
    }
})

