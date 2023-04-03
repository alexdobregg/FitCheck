const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, isAdmin} = require('../middleware');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login'}), users.login);

router.route('/profile')
    .get(isLoggedIn, users.renderProfile)
    .put(isLoggedIn, catchAsync(users.updateProfile));

router.route('/users/admin/index')
    .get(isLoggedIn, isAdmin, users.adminIndex);

router.route('/users/:id')
    .get(isLoggedIn, isAdmin, catchAsync(users.renderEdit))
    .put(isLoggedIn, isAdmin, catchAsync(users.editUser))
    .delete(isLoggedIn, isAdmin, catchAsync(users.deleteUser));

router.route('/users/:id/addFavoriteExercise/:idEx')
    .put(isLoggedIn, catchAsync(users.addFavoriteExercise));

router.get('/logout', users.logout);

module.exports = router;