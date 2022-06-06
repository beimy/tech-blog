const router = require('express').Router();
const { Post, Comment, User, Tag, Category, Comment_Tags, Post_Tags } = require('../../models');
const withAuth = require('../../utils/auth');

//get all users and all associated data
router.get('/userData/all', async(req,res) => {
  try {
    const userData = await
    User.findAll({
      attributes: ['user_id', 'username', 'email', 'about'],
      include: 
      [
        {
          model: Post,
          attributes: ['post_id','post_title', 'post_content', 'category_id'],
          include: 
          [
            {
              model: Tag,
              as: 'tags',
            },
            {
              model: Category,
              attributes: ['category_id', 'category_title', 'category_description']
            },
            {
              model: Comment, 
              attributes: ['comment_id', 'comment_title', 'comment_content', 'user_id'],
              include:
              [
                {
                  model: User,
                  attributes: ['username', 'user_id']
                },
                {
                  model: Tag,
                  as: 'tags'
                }
              ]
            }
          ]
        },
        {
          model: Comment,
          attributes: ['comment_id', 'comment_title', 'comment_content', 'post_id'],
          include: 
            [
              {
                model: Tag,
                as: 'tags'
              },
              {
                model: Post,
                attributes: ['post_id', 'post_title']
              }
            ]
        }
      ]
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({message: `Error encountered in admin routes -  Find All Users: ${err}`})
  }
  })
//get user data by id
router.get("/userData/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    User.findByPk(userId, {
      where: {
        user_id: userId,
      },
      attributes: ["user_id", "username", "email", "about"],
      include: [
        {
          model: Post,
          attributes: ["post_id", "post_title", "post_content", "category_id"],
          include: [
            {
              model: Tag,
              as: "tags",
            },
            {
              model: Category,
              attributes: [
                "category_id",
                "category_title",
                "category_description",
              ],
            },
            {
              model: Comment,
              attributes: [
                "comment_id",
                "comment_title",
                "comment_content",
                "user_id",
              ],
              include: [
                {
                  model: User,
                  attributes: ["username", "user_id"],
                },
                {
                  model: Tag,
                  as: "tags",
                },
              ],
            },
          ],
        },
        {
          model: Comment,
          attributes: [
            "comment_id",
            "comment_title",
            "comment_content",
            "post_id",
          ],
          include: [
            {
              model: Tag,
              as: "tags",
            },
            {
              model: Post,
              attributes: ["post_id", "post_title"],
            },
          ],
        },
      ],
    });
  } catch (err) {
    res
      .status(500)
      .json({
        message: `Unexpected error encountered in get userData by userId Route: ${err}`,
      });
  }
});

//get user by username

//get user by email

//edit user => admin status

//edit user => username

//edit user => email

//edit user => isolate/deactivate/ban

//edit user => other

//create new user

//delete user => archive user - user posts - user comments

//delete user => delete user and all user data 

module.exports = router