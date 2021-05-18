const sequelize = require('../config/connection');
const { Blog,User, Comment } = require('../models');

const blogData = require('./blogData');
const userData = require('./userData');
const commentData = require('./commentData');


async function createData () {
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });
    await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });
    await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

}
createData()