const express = require('express');
const router = express.Router();

// using passport local strategy to authenticate login
router.get('/login', (req, res) => {
    /*passport.authenticate('local', {
        successRedirect: '/projects/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);*/
    res.send("Authenticate me please");

});

module.exports = router;