const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auths');

router.get('/', withAuth, async (req,res) => {
    res.render('dashboard', {
        logged_in: req.session.logged_in,
    });
});

router.get('/new', withAuth, async (req,res) => {
    res.render('post', {
        logged_in: req.session.logged_in,
    });
});

module.exports = router