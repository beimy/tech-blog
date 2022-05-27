const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "wow!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Billy's in a well"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Go Ole Yeller"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "totally radical"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of our biggest and the most awaited feature. Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful stuff!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice Blog!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

