const router = require("express").Router();
const { Comment } = require("../../models");

// Create new post
router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.comment,
      comment_id: req.session.comment_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Edit post
router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      {
        content: req.body.content
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Delete post
router.delete("/:id", async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;