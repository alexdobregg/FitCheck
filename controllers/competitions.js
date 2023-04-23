const Competition = require('../models/competition');
const User = require('../models/user');

module.exports.renderNew = (req, res) => {
    res.render('competitions/new');
};

module.exports.createCompetition = async(req, res) => {
    const activeCompetition = await Competition.findOne({active: true});
    if (activeCompetition) {
        req.flash('error', 'There is another active competition!');
        return res.redirect('/competitions/new');
    }
    const competition = new Competition(req.body.competition);
    await competition.save();
    req.flash('success', 'Successfully created a new competition!');
    res.redirect('/competitions/index');
}

module.exports.index = async(req, res) => {
    const competition = await Competition.findOne({active: true});
    if (competition) {
        var participants = await User.find({ '_id': { $in: competition.participants.map(participant => participant.toString())}});
        participants = participants.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
        });
    }
    res.render('competitions/index', { competition, participants });
}

module.exports.adminIndex = async(req, res) => {
    var allCompetitions = await Competition.find({});
    var activeCompetitionIdx = allCompetitions.findIndex(competition => competition.active == true);
    if (activeCompetitionIdx != -1) {
        var activeCompetition = allCompetitions.splice(activeCompetitionIdx, 1)[0];
        allCompetitions.unshift(activeCompetition);
    }
    res.render('competitions/adminIndex', { allCompetitions });
}

module.exports.register = async(req, res) => {
    const competition = await Competition.findOne({active: true});
    var idx = competition.participants.findIndex(participant => participant.toString() === req.user.id);
    if (idx == -1) {
        competition.participants.push(req.user);
    } else {
        competition.participants.splice(idx, 1);
    }

    await Competition.findByIdAndUpdate(competition.id, { ...competition });
    return res.redirect('/competitions/index');
}

module.exports.deleteCompetition = async(req, res) => {
    const { id } = req.params;
    await Competition.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted the competition!')
    res.redirect('/competitions/admin/index');
};

module.exports.renderEdit = async (req, res) => {
    const { id } = req.params;
    const competition = await Competition.findById(id);
    if (!competition) {
        req.flash('error', 'Cannot find that competition!');
        return res.redirect('/competitions/admin/index');
    }
    res.render('competitions/edit', { competition });
};

module.exports.editCompetition = async(req, res) => {
    const { id } = req.params;
    await Competition.findByIdAndUpdate(id, { ...req.body.competition });
    req.flash('success', 'Successfully updated the competition!');
    res.redirect(`/competitions/${id}`);
};

module.exports.deactivateCompetition = async(req, res) => {
    const { id } = req.params;
    await Competition.findByIdAndUpdate(id, { active: false });
    req.flash('success', 'Successfully deactivated the competition!');
    res.redirect('/competitions/admin/index');
};