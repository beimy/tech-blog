const router = require('express').Router();
const { Post } = require('../../models');
const { Comment } = require('../../models');
const { User } = require('../../models');
const { Tag } = require('../../models');
// const withAuth = require('../../utils/auth'); set up the const for when we have the auth folder built out
router.get('/', async (req, res) => {

  try{
    const postData = await Post.findAll({
      attributes: [
        'id',
        'title',
        'post_content',
        'category',
        'tags',
        'user_id'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'title', 'comment_content', 'user_id', 'created_at'],
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
        'post_content',
        'category',
        'tags',
        'user_id'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'title', 'comment_content', 'user_id', 'created_at'],
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
  
// Create a post 
router.post('/', async(req, res) => {
   
  try {
    const newPostDate = await
      Post.create({
        title: req.body.title,
        post_content: req.body.post_content,
        user_id: req.session.user_id
      });

      if(!err){
        res.status(200).json(`New post successfully created.`)
      }
  } catch (err) {
    res.status(500).json(`unexpected error encountered in Create New Post Route: ${err}`)
  }
});


// Update a post
router.put("/:id", (req,res) => {
  Post.update({
    title: req.body.title,
    post_content: req.body.post_content,
  }, {
    where: {
      id: req.params.id,
    },
  })
  .then((dbPostData) => {
    if (!dbPostData) {
      res.status(404).json({
        message: "No post found with this id"
      });
      return;
    }
    res.json(dbPostData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

//Delete a post
router.delete("/:id", (req,res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((dbPostData) => {
    if (!dbPostData) {
      res.status(404).json({
        message: "No post found with this id"
      });
      return;
    }
    res.json(dbPostData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router