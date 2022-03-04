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
    const challengeData = await Challenge.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "username"],
          through: {
            model: UserChallenge,
          },
        },
        {
          model: Post,
          attributes: ["text", "date_created"],
          include: [
            {
              model: User,
              attributes: ["id", "username"],
            }
          ]
        }
      ],
    });
    // const posts = postData.get({ plain: true });
    console.log(challenge);
  
    const postData = await Post.findAll({
      where: {
        challenge_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        }
      ]
    });
  
    const posts = postData.map((post) => post.get({ plain: true }));
    // console.log({challenge});
    res.render("posts", {
      ...posts,
      // posts,
      // logged_in: req.session.logged_in,
    });
  });

module.exports = router;
