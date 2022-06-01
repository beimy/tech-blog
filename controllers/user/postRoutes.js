const router = require('express').Router();
const { Post } = require('../../models');
const { Comment } = require('../../models');
const { User } = require('../../models');
const { Tag } = require('../../models');

router.get('/', async (req, res) => {

  try{
    const postData = await Post.findAll({
      attributes: [
        'id',
        'title',
        'body',
        'category',
        'tags',
        'user_id'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'title', 'body', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Tag,
          attributes: ['tag_name']
        }
      ]
    });

    res.status(200).json(postData);
  }catch(err){
    res.status(500).json(`Unexpected error encountered in GET all Posts route: ${err}`)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await Post.findByPk(postId, {
      attributes: [
        'id',
        'title',
        'body',
        'category',
        'tags',
        'user_id'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'title', 'body', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Tag,
          attributes: ['tag_name']
        }
      ]
    });

    res.status(200).json(postData)
  } catch (err) {
    res.status(500).json(`Unexpected error encountered in GET Post by id route: ${err}`)
  }
})

// router.post('/new', withAuth async(req, res) => {
//   try {
//     const newPost = 
//   } catch (err) {
//     res.status(500).json(`Unexpected error encountered in POST New Post route: ${err}`)
//   }
// })
  

module.exports = router