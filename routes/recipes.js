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

router.route('/recipes/admin/index')
    .get(isLoggedIn, isAdmin, recipes.adminIndex);

router.route('/recipes/:id')
    .get(isLoggedIn, isAdmin, catchAsync(recipes.renderEdit))
    .put(isLoggedIn, isAdmin, catchAsync(recipes.editRecipe))
    .delete(isLoggedIn, isAdmin, catchAsync(recipes.deleteRecipe));

router.route('/recipes/index/:ingredient')
    .get(isLoggedIn, catchAsync(recipes.ingredientIndex));

router.route('/recipes/admin/index/:ingredient')
    .get(isLoggedIn, isAdmin, catchAsync(recipes.ingredientAdminIndex));

module.exports = router;