const Competition = require('../models/competition');

module.exports.renderNew = (req, res) => {
    res.render('competitions/new');
};

module.exports.createCompetition = async(req, res) => {
    const competition = new Competition(req.body.competition);
    await competition.save();
    req.flash('success', 'Successfully created a new competition!');
    res.redirect('/');
}

module.exports.index = async(req, res) => {
    const competitions = await Competition.find({active: true});
    res.render('competitions/index', { competitions });
}