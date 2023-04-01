const express = require('express');
const router = express.Router();
const competitions = require('../controllers/competitions');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, isAdmin} = require('../middleware');

router.route('/competitions/new')
    .get(competitions.renderNew)
    .post(competitions.createCompetition);

module.exports = router;