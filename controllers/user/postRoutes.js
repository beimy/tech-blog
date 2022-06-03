const router = require('express').Router();
const { Post, Comment, User, Tag, Category, Post_Tags } = require('../../models');
const withAuth = require('../../utils/auth');

/*
================================================
POST ROUTES | NO-AUTHENTICATION | SEARCH POSTS
================================================
*/

router.get('/post-test', async(req, res) => {
  try {
    res.status(200).render('post-page', {
      pageTitle: 'Test Post-Page'
    })
  } catch (err) {
    res.status(400).json(`Error encountered in test-post route: ${err}`)
  }
})

//DEFAULT ROUTE => GET ALL POSTS
router.get('/', async (req, res) => {
  try{
    const postData = await Post.findAll({
      attributes: [
        'post_id',
        'post_title',
        'post_content',
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Category,
          attributes: ['category_id', 'category_name']
        },
        {
          model: Tag,
          as: 'tags',
        },
        {
          model: Comment,
          attributes: ['comment_id', 'comment_title', 'comment_content', 'user_id', 'created_at'],
          include: [
            {
              model: User,
              attributes: ['username'],
            },
            {
              model: Tag,
              as: 'tags'
            }
          ]
        },
      ]
    });

    res.status(200).json(postData);
  }catch(err){
    res.status(500).json(`Unexpected error encountered in GET all Posts route: ${err}`)
  }
});

// GET POST BY ID
router.get('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await Post.findByPk(postId, {
      attributes: [
        'post_id',
        'post_title',
        'post_content',
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Category,
          attributes: ['category_id', 'category_name']
        },
        {
          model: Tag,
          as: 'tags',
        },
        {
          model: Comment,
          attributes: ['comment_id', 'comment_title', 'comment_content', 'user_id', 'created_at'],
          include: [
            {
              model: User,
              attributes: ['username'],
            },
            {
              model: Tag,
              as: 'tags'
            }
          ]
        },
      ]
    });

    res.status(200).json(postData);  
  }catch(err){
    res.status(500).json(`Unexpected error encountered in GET Post by id route: ${err}`)
  }
});

//GET POSTS BY USER ID
router.get('/user/:id', async (req, res) => {
  try{
    const userId = req.params.id;
    const postData = await Post.findAll({
      where:{
        user_id: userId
      },
      attributes: [
        'post_id',
        'post_title',
        'post_content',
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Category,
          attributes: ['category_id', 'category_name']
        },
        {
          model: Tag,
          as: 'tags',
        },
        {
          model: Comment,
          attributes: ['comment_id', 'comment_title', 'comment_content', 'user_id', 'created_at'],
          include: [
            {
              model: User,
              attributes: ['username'],
            },
            {
              model: Tag,
              as: 'tags'
            }
          ]
        },
      ]
    });

    res.status(200).json(postData);
  }catch(err){
    res.status(500).json(`Unexpected error encountered in GET all Posts By User route: ${err}`)
  }
});

/*
================================================
POST ROUTES | AUTHENTICATION-REQUIRED | USER 
================================================
*/
  
// CREATE NEW POST
router.post('/', withAuth, async(req, res) => {
   
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


//UPDATE POST BY ID | EDIT POST BY ID
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

//DELETE POST BY ID
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