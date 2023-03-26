const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');


router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', catchAsync(async(req, res) => {
    try {
        const {email, username, password, first_name, last_name, weight, height, gender, birth_date} = req.body;
        const user = new User({
            username,
            email,
            name: first_name + ' ' + last_name,
            weight,
            height,
            gender,
            birth_date
        });
        await User.register(user, password);
        req.flash('success', 'Welcome to FitCheck!');
        res.redirect('/');
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
}));

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login'}), catchAsync(async(req, res) => {
    req.flash('success', 'Welcome!');
    res.redirect('/');
}));

router.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) return next(err);
        req.flash('success', 'Successfully logged out!');
        res.redirect('/login');
    });
});


module.exports = router;