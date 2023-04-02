const Exercise = require('../models/exercise');

module.exports.renderNew = (req, res) => {
    res.render('exercises/new');
};

module.exports.createExercise = async (req, res) => {
    const exercise = new Exercise(req.body.exercise);
    await exercise.save();
    req.flash('success', 'Successfully created a new exercise!');
    res.redirect('/');
}