const express = require('express');
const router = express.Router();
const recipes = require('../controllers/recipes');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, isAdmin} = require('../middleware');

router.route('/recipes/new')
    .get(isLoggedIn, isAdmin, recipes.renderNew)
    .post(isLoggedIn, isAdmin, catchAsync(recipes.createRecipe));

router.route('/recipes/index')
    .get(isLoggedIn, recipes.index);

router.route('/recipes/favorites/index')
    .get(isLoggedIn, recipes.favoriteIndex);

module.exports = router;