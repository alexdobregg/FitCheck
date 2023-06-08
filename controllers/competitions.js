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
    req.body.competition.end_date = new Date(`${req.body.competition.end_date}T23:59:59.000Z`)
    const competition = new Competition(req.body.competition);
    await competition.save();
    req.flash('success', 'Successfully created a new competition!');
    res.redirect('/competitions/index');
}

module.exports.index = async(req, res) => {
    const competition = await Competition.findOne({active: true});
    if (competition) {
        var allParticipants = [];
        for (let participant of competition.participants) {
            allParticipants.push(participant.user);
        }
        var auxParticipants = await User.find({ '_id': { $in: allParticipants.map(participant => participant.toString())}});
        var participants = [];
        for (let participant of competition.participants) {
            var userIdx = auxParticipants.findIndex(particip => particip.id == participant.user.toString());
            participants.push({user: auxParticipants[userIdx], caloriesBurned: participant.caloriesBurned});
        }
        participants = participants.sort((a, b) => {
            if (a.user.name < b.user.name) {
                return -1;
            }
        })
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
    var idx = competition.participants.findIndex(participant => participant.user.toString() === req.user.id);
    if (idx == -1) {
        competition.participants.push({user: req.user, caloriesBurned: 0});
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
    var allParticipants = [];
    for (let participant of competition.participants) {
        allParticipants.push(participant.user);
    }
    var auxParticipants = await User.find({ '_id': { $in: allParticipants.map(participant => participant.toString())}});
    var participants = [];
    for (let participant of competition.participants) {
        var userIdx = auxParticipants.findIndex(particip => particip.id == participant.user.toString());
        participants.push({user: auxParticipants[userIdx], caloriesBurned: participant.caloriesBurned});
    }
    participants = participants.sort((a, b) => {
        if (a.caloriesBurned > b.caloriesBurned) {
            return -1;
        }
    })
    var types = ['Burning Calories', 'Marathon'];
    var typeIdx = types.findIndex(type => type == competition.type)
    types.splice(typeIdx, 1);
    types.unshift(competition.type);
    res.render('competitions/edit', { competition, participants, types });
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

module.exports.addCalories = async(req, res) => {
    const {id} = req.params;
    const competition = await Competition.findById(id);
    var idx = competition.participants.findIndex(participant => participant.user.toString() === req.user.id);
    competition.participants[idx].caloriesBurned += parseInt(req.body.calories_burned);
    await competition.save();
    req.flash('success', 'Successfully added the calories!');
    res.redirect('/competitions/index');
};