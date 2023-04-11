const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, isAdmin, isPremium} = require('../middleware');

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

router.route('/users/friends/index')    
    .get(isLoggedIn, isPremium, catchAsync(users.friendsIndex));

router.route('/users/following')
    .get(isLoggedIn, isPremium, catchAsync(users.followingIndex));

router.route('/users/:id')
    .get(isLoggedIn, isAdmin, catchAsync(users.renderEdit))
    .put(isLoggedIn, isAdmin, catchAsync(users.editUser))
    .delete(isLoggedIn, isAdmin, catchAsync(users.deleteUser));

router.route('/users/:id/addFavoriteExercise/:idEx')
    .put(isLoggedIn, catchAsync(users.addFavoriteExercise));

router.route('/users/:id/addFavoriteRecipe/:idRec')
    .put(isLoggedIn, catchAsync(users.addFavoriteRecipe));

router.route('/users/:id/followFriend/:idFriend')
    .put(isLoggedIn, isPremium, catchAsync(users.followFriend));

router.route('/users/friends/index/:name')
    .get(isLoggedIn, isPremium, catchAsync(users.friendIndex));

router.route('/users/admin/index/:name')
    .get(isLoggedIn, isAdmin, catchAsync(users.nameAdminIndex));
    
router.get('/logout', users.logout);

module.exports = router;