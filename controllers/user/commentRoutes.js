const router = require("express").Router();
const { User, Post, Comment, Tag } = require("../../models");
const withAuth = require("../../utils/auth");


/*
================================================
COMMENT ROUTES - /comments
================================================
*/

// GET ALL COMMENTS

router.get("/", async(req, res) => {
  try {
    const dbCommentData = await Comment.findAll({
      attributes: ["comment_id", "comment_title", "comment_content"],
      include: [
        {
          model: User,
          attributes: ["username", "user_id"],
        },
        {
          model: Post,
          attributes: ["post_id", "post_title"],
        },
        {
          model: Tag,
          as: "tags",
          attributes: ["tag_id", "tag_name"],
        },
      ],
    })
    res.status(200).json(dbCommentData);
  } catch (err) {
    res
    .status(500)
    .json(`Error encountered in get all comments route: ${err}`);
  }
})

//GET ALL COMMENTS BY USER ID - withAuth

router.get("/user", withAuth, async(req, res) => {
  try {
    const dbCommentData = await Comment.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["comment_id", "comment_title", "comment_content"],
      include: [
        {
          model: User,
          attributes: ["username", "user_id"],
        },
        {
          model: Post,
          attributes: ["post_id", "post_title"],
        },
        {
          model: Tag,
          as: "tags",
          attributes: ["tag_id", "tag_name"],
        },
      ],
    });
    res.status(200).json(dbCommentData);
  } catch (err) {
    res
      .status(500)
      .json({
        message: `Unexpected error encountered in get comments by user id route ${err}`,
      });
  }
});

//CREATE NEW COMMENT
router.post('/', withAuth, async(req,res) => {
  try {
    const dbCommentData = await Comment.create({
      comment_title: req.body.comment_title,
      comment_content: req.body.comment_content,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    })
    res.status(200).json(dbCommentData);
  } catch (err) {
    res.status(500).json({message: `Unexpected error encountered in Create New Comment Route: ${err}`});
    console.error(err);
  }
});

// EDIT COMMENT 
router.put("/", async (req, res) => {
  try {
    const dbCommentData = await Comment.update(
      {
      comment_content: req.body.comment_content,
      },
      {
      where: {
        comment_id: req.body.comment_id,
      },
  });
    if (!dbCommentData) {
      res.status(400).json({ message: `No comment found` });
    } else {
      res.status(200).json(dbCommentData);
    }
  } catch (err) {
    res
      .status(500)
      .json({
        message: `Unexpected error encountered in Edit Comment Route: ${err}`,
      });
    console.log(err);
  }
});

// DELETE COMMENT
router.delete('/', async(req,res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: {
        comment_id: req.body.comment_id
      }
    })
    res.status(200).json(deleteComment);
  } catch (err) {
    res.status(500).json({message: `Unexpected error encountered in (route name here): ${err}`});
    console.log(err);
  }
});


module.exports = router;
