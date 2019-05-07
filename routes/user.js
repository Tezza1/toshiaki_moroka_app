const express = require('express');
const router = express.Router();

// using passport local strategy to authenticate login
router.post('/login', (req, res) => {
    /*passport.authenticate('local', {
        successRedirect: '/projects/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);*/
    res.render('dashboard');

});

module.exports = router;