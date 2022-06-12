const router = require("express").Router();
const { User, Post, Comment, Tag, Post_Tags, Comment_Tags } = require("../../models");
const withAuth = require("../../utils/auth");

/*
================================================
TAG ROUTES - localhost:3010/tag
================================================
*/

// GET ALL TAGS
router.get('/', async(req,res) => {
  try {
    const tagData = await Tag.findAll({
      attributes: [
        'tag_id',
        'tag_name',
        'tag_description'
      ],
     
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({message: `Unexpected error encountered in (route name here): ${err}`});
    console.log(err);
  }
});


// GET ALL POST_TAGS
router.get('/post', async(req,res) => {
  try {
    const response = await Post_Tags.findAll({
      attributes: [
        'tag_id',
        'post_id'
      ],
      include: [
        {
          model: Post,
          key: 'post_id',
          attributes: [
            'post_title',
            'post_summary',
            'post_url'
          ],
          include: [
            {
              model: User,
              key: 'user_id',
              attributes: ['username']
            }
          ]
        },
        {
          model: Tag,
          key: 'tag_id',
          attributes: [
            'tag_name',
            'tag_description'
          ]
        }
      ]
    })
    
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({message: `Unexpected error encountered in get all post tags: ${err}`});
    console.log(err);
  }
});




// GET ALL COMMENT_TAGS
router.get('/comment', async(req,res) => {
  try {
    const commentTags = await Comment_Tags.findAll({
      attributes: [
        'tag_id',
        'comment_id'
      ],
      include: [
        {
          model: Tag,
          key: 'tag_id',
          attributes: [
            'tag_name',
            'tag_description'
          ]
        },
        {
          model: Comment,
          key: 'comment_id',
          attributes: [
            'comment_title',
            'comment_content',
            'user_id'
          ], 
          include: [
            {
              model: User,
              key: 'user_id',
              attributes: ['username']
            }
          ]
        }
      ]
    })
    res.status(200).json(commentTags);
  } catch (err) {
    res.status(500).json({message: `Unexpected error encountered in (route name here): ${err}`});
    console.log(err);
  }
});

// GET TAG BY ID
router.get('/:id', async(req,res) => {
  try {
    const response = await Tag.findAll({
      where: {
        tag_id: req.params.id
      },
      attributes: [
        'tag_name',
        'tag_description'
      ]
    })
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({message: `Unexpected error encountered in (route name here): ${err}`});
    console.log(err);
  }
});

//CREATE NEW POST_TAG RELATIONSHIP
router.post('/post', async(req,res) => {
  try {
    const response = await Post_Tags.create({
      tag_id: req.body.tag_id,
      post_id: req.body.post_id
    })
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({message: `Unexpected error encountered in (route name here): ${err}`});
    console.log(err);
  }
});

// CREATE NEW COMMENT_TAG RELATIONSHIP
router.post('/comment', async(req,res) => {
  try {
    const response = await Comment_Tags.create({
      tag_id: req.body.tag_id,
      comment_id: req.body.comment_id
    })
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({message: `Unexpected error encountered in (route name here): ${err}`});
    console.log(err);
  }
});

// DELETE POST_TAG
router.delete('/', async(req,res) => {
  try {
    
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({message: `Unexpected error encountered in (route name here): ${err}`});
    console.log(err);
  }
});

//DELETE COMMENT_TAG 
router.delete('/', async(req,res) => {
  try {
    
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({message: `Unexpected error encountered in (route name here): ${err}`});
    console.log(err);
  }
});
module.exports = router;