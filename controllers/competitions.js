const Competition = require('../models/competition');

module.exports.renderNew = (req, res) => {
    res.render('competitions/new');
};

module.exports.createCompetition = async (req, res) => {
    const competition = new Competition(req.body.competition);
    await competition.save();
    req.flash('success', 'Successfully made a new competition!');
    res.redirect('/');
}