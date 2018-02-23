const express = require('express');
const router  = express.Router();
const passport = require("passport");
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

// Display Login Form
router.get('/login', ensureLoggedOut(), (req, res) => {
    res.render('authentication/login');
});


// Handle Submission of Login Form
router.post('/login', ensureLoggedOut(), passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/login'
  }));
  

// Display Signup Form
router.get('/signup', ensureLoggedOut(), (req, res) => {
    res.render('authentication/signup');
});


// Handle
router.post('/signup', ensureLoggedOut(), passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup'
  }));

router.post('/logout', ensureLoggedIn('/login'), (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;