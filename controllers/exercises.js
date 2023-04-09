const Exercise = require('../models/exercise');
const User = require('../models/user');

module.exports.renderNew = (req, res) => {
    res.render('exercises/new');
};

module.exports.renderEdit = async (req, res) => {
    const { id } = req.params;
    const exercise = await Exercise.findById(id);
    if (!exercise) {
        req.flash('error', 'Cannot find that exercise!');
        return res.redirect('/exercises/admin/index');
    }
    var muscles = ['abdominals', 'biceps', 'calves', 'lower_back', 'middle_back', 'triceps', 'quadriceps', 'traps', 'glutes', 'forearms'];
    var musclesDisplay = ['Abdominals', 'Biceps', 'Calves', 'Lower Back', 'Middle Back', 'Triceps', 'Quadriceps', 'Traps', 'Glutes', 'Forearms'];
    var muscleIdx = muscles.findIndex(muscle => muscle == exercise.muscle)
    muscles.splice(muscleIdx, 1);
    var muscleDisplay = musclesDisplay.splice(muscleIdx, 1);
    muscles.unshift(exercise.muscle);
    musclesDisplay.unshift(muscleDisplay);
    res.render('exercises/edit', { exercise, muscles, musclesDisplay });
};

module.exports.createExercise = async (req, res) => {
    const exercise = new Exercise(req.body.exercise);
    await exercise.save();
    req.flash('success', 'Successfully created a new exercise!');
    res.redirect('/');
};

module.exports.index = async(req, res) => {
    const allExercises = await Exercise.find({});
    var favorites = false;
    res.render('exercises/index', { allExercises, favorites });
};

module.exports.adminIndex = async(req, res) => {
    const allExercises = await Exercise.find({}); 
    res.render('exercises/adminIndex', { allExercises });
};

module.exports.deleteExercise = async(req, res) => {
    const { id } = req.params;
    const allUsers = await User.find({});
    for (let user of allUsers) {
        var idx = user.exercises.findIndex(ex => ex.toString() === id);
        if (idx != -1) {
            user.exercises.splice(idx, 1);
        }
        await User.findByIdAndUpdate(user.id, { ...user });
    }
    await Exercise.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted the exercise!')
    res.redirect('/exercises/admin/index');
};

module.exports.editExercise = async(req, res) => {
    const { id } = req.params;
    await Exercise.findByIdAndUpdate(id, { ...req.body.exercise });
    req.flash('success', 'Successfully updated the exercise!');
    res.redirect(`/exercises/${id}`);
};

module.exports.favoriteIndex = async(req, res) => {
    var allExercises = await Exercise.find({ '_id': { $in: req.user.exercises.map(ex => ex.toString())}});
    var favorites = true;
    res.render('exercises/index', { allExercises, favorites });
};

module.exports.muscleIndex = async(req, res) => {
    var { muscle } = req.params;
        var allExercises = await Exercise.find({'muscle': { $regex: muscle, $options: 'i'}});
    var favorites = false;
    if (allExercises.length == 0) {
        req.flash('error', "There are no exercises related to this muscle type!");
        return res.redirect(`/exercises/index`);
    }
    res.render('exercises/index', { allExercises, favorites});
}

module.exports.muscleAdminIndex = async(req, res) => {
    var { muscle } = req.params;
    var allExercises = await Exercise.find({'muscle': { $regex: muscle, $options: 'i'}});
    if (allExercises.length == 0) {
        req.flash('error', "There are no exercises related to this muscle type!");
        return res.redirect(`/exercises/admin/index`);
    }
    res.render('exercises/adminIndex', { allExercises });
}