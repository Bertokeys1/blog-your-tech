const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auths");

router.get("/", withAuth, async (req, res) => {
  try {
    // get loged in users post
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
    });

    const posts = postData.map((post)=> post.get({plain:true}));
    

    console.log(req.session.user_id);
    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.redirect("login");
  }
});

router.get("/new", withAuth, async (req, res) => {
  res.render("post", {
    logged_in: req.session.logged_in,
  });
});


router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id)

    const post = postData.get({ plain: true });

    res.render("postview", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
