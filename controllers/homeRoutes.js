const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auths");

// Prevent non logged in users from viewing the homepage
//this route needs to show all the posts from ALL users and include the user Data
router.get("/", withAuth, async (req, res) => {
  const postData = await Post.findAll({
    include: [User],
  });

  const posts = postData.map((post) => post.get({ plain: true }));
  console.log(posts);
  res.render("homepage", {
    posts,
    logged_in: req.session.logged_in,
  });
});

router.get("/post/:id", async (req, res) => {
  console.log("Alberto");
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const posts = postData.get({ plain: true });

    console.log(posts);

    
    res.render("postview", {
      posts,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
// what needs to be seen:
// homepage
// sign up
// log in
// set up get routes f
