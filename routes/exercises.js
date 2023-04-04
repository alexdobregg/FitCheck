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

router.route('/exercises/admin/index')
    .get(isLoggedIn, isAdmin, exercises.adminIndex);

router.route('/exercises/:id')
    .get(isLoggedIn, isAdmin, catchAsync(exercises.renderEdit))
    .put(isLoggedIn, isAdmin, catchAsync(exercises.editExercise))
    .delete(isLoggedIn, isAdmin, catchAsync(exercises.deleteExercise));

module.exports = router;