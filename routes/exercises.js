const express = require('express');
const router = express.Router();
const exercises = require('../controllers/exercises');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, isAdmin} = require('../middleware');

router.route('/exercises/new')
    .get(isLoggedIn, isAdmin, exercises.renderNew)
    .post(isLoggedIn, isAdmin, catchAsync(exercises.createExercise));

router.route('/exercises/index')
    .get(isLoggedIn, exercises.index);

module.exports = router;