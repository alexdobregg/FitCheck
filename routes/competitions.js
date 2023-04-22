const express = require('express');
const router = express.Router();
const competitions = require('../controllers/competitions');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, isAdmin} = require('../middleware');

router.route('/competitions/new')
    .get(isLoggedIn, isAdmin, competitions.renderNew)
    .post(isLoggedIn, isAdmin, catchAsync(competitions.createCompetition));

router.route('/competitions/index')
    .get(isLoggedIn, catchAsync(competitions.index));

router.route('/competitions/admin/index')
    .get(isLoggedIn, catchAsync(competitions.adminIndex));

router.route('/competitions/register')
    .get(isLoggedIn, catchAsync(competitions.register));

router.route('/competitions/:id')
    .get(isLoggedIn, isAdmin, catchAsync(competitions.renderEdit))
    .put(isLoggedIn, isAdmin, catchAsync(competitions.editCompetition))
    .delete(isLoggedIn, isAdmin, catchAsync(competitions.deleteCompetition));

module.exports = router;