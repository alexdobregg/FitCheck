const User = require('../models/user');
const Exercise = require('../models/exercise');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
};

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
};

module.exports.renderProfile = (req, res) => {
    res.render('users/profile');
};

module.exports.renderEdit = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        req.flash('error', 'Cannot find that user!');
        return res.redirect('/users/index');
    }
    res.render('users/edit', { user });
};

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome!');
    res.redirect('/');
};

module.exports.register = async(req, res) => {
    try {
        const {email, username, password, first_name, last_name, weight, height, gender, birth_date} = req.body;
        const user = new User({
            username,
            email,
            name: first_name + ' ' + last_name,
            weight,
            height,
            gender,
            birth_date
        });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to FitCheck!');
            res.redirect('/');
        });  
    } catch (e) {
        req.flash('error', 'Username or email already exists!');
        res.redirect('/register');
    }
};

module.exports.updateProfile = async (req, res) => {
    await User.findByIdAndUpdate(req.user._id, { ...req.body.currentUser });
    req.flash('success', 'Successfully updated your profile!');
    res.redirect(`/profile`);
};

module.exports.logout = (req, res) => {
    req.logout(function(err) {
        if (err) return next(err);
        req.flash('success', 'Successfully logged out!');
        res.redirect('/login');
    });
};

module.exports.adminIndex = async (req, res) => {
    const allUsers = await User.find({});
    res.render('users/adminIndex', { allUsers });
};


module.exports.editUser = async(req, res) => {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, { ...req.body.user });
    req.flash('success', 'Successfully updated the user!');
    res.redirect(`/users/${id}`);
};

module.exports.deleteUser = async(req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted the user!')
    res.redirect('/users/admin/index');
};

module.exports.addFavoriteExercise = async(req, res) => {
    var currentUser = req.user;
    var exerciseId = req.originalUrl.split(/[/?]+/)[4];
    const exercise = await Exercise.findById(exerciseId);
    var idx = currentUser.exercises.findIndex(ex => ex.toString() === exerciseId);
    if (idx == -1) {
        currentUser.exercises.push(exercise);
    } else {
        currentUser.exercises.splice(idx, 1);
        // currentUser.exercise.remove(exercise);
    }
    await User.findByIdAndUpdate(currentUser.id, { ...currentUser });
};