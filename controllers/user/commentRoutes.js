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


router.post("/", (req, res) => {
  console.log(req.session)
  Comment.create({
    comment_title: req.body.comment_title,
    comment_content: req.body.comment_content,
    post_id: req.body.post_id,
    user_id: req.session.user_id,
  })
    .then((dbCommentData) => res.status(200).json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });

});


// edit a comment
router.put("/:id", (req, res) => {
  Comment.update(
    {
      comment_content: req.body.comment_content,
    },
    {
      where: {
        comment_id: req.params.id,
      },
    }
  )
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id" });
        return;
      }
      res.status(200).json({ message: `Comment has been updated` });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a comment
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      comment_id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id" });
        return;
      }
      res.status(200).json({ message: `comment has been deleted` });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
