const User = require('../models/user');
const Exercise = require('../models/exercise');
const Recipe = require('../models/recipe');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
};

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
};

module.exports.renderProfile = (req, res) => {
    var genders = ['male', 'female', 'other'];
    genders.splice(genders.findIndex(gender => gender == req.user.gender), 1)
    genders.unshift(req.user.gender);
    res.render('users/profile', {genders});
};

module.exports.renderEdit = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        req.flash('error', 'Cannot find that user!');
        return res.redirect('/users/admin/index');
    }
    var genders = ['male', 'female', 'other'];
    genders.splice(genders.findIndex(gender => gender == user.gender), 1)
    genders.unshift(user.gender);
    var roles = ['basic', 'premium', 'admin'];
    roles.splice(roles.findIndex(role => role == user.role), 1);
    roles.unshift(user.role);
    res.render('users/edit', { user, genders, roles });
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
    const allUsers = await User.find({});
    for (let user of allUsers) {
        var idx = user.friends.findIndex(fr => fr.toString() === id);
        if (idx != -1) {
            user.friends.splice(idx, 1);
        }
        await User.findByIdAndUpdate(user.id, { ...user });
    }
    await User.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted the user!')
    res.redirect('/users/admin/index');
};

module.exports.addFavoriteExercise = async(req, res) => {
    var currentUser = req.user;
    var exerciseId = req.params.idEx;
    const exercise = await Exercise.findById(exerciseId);
    var idx = currentUser.exercises.findIndex(ex => ex.toString() === exerciseId);
    if (idx == -1) {
        currentUser.exercises.push(exercise);
    } else {
        currentUser.exercises.splice(idx, 1);
    }
    await User.findByIdAndUpdate(currentUser.id, { ...currentUser });
};

module.exports.addFavoriteRecipe = async(req, res) => {
    var currentUser = req.user;
    var recipeId = req.params.idRec;
    const recipe = await Recipe.findById(recipeId);
    var idx = currentUser.recipes.findIndex(ex => ex.toString() === recipeId);
    if (idx == -1) {
        currentUser.recipes.push(recipe);
    } else {
        currentUser.recipes.splice(idx, 1);
    }
    await User.findByIdAndUpdate(currentUser.id, { ...currentUser });
};

module.exports.followFriend = async(req, res) => {
    var currentUser = req.user;
    var friendId = req.params.idFriend;
    var idx = currentUser.friends.findIndex(fr => fr.toString() === friendId);
    if (idx == -1) {
        const friend = await User.findById(friendId);
        currentUser.friends.push(friend);
    } else {
        currentUser.friends.splice(idx, 1);
    }
    await User.findByIdAndUpdate(currentUser.id, { ...currentUser });
};

module.exports.friendsIndex = async(req, res) => {
    const users = await User.find({});
    const allUsers = users.filter(user => user.id !== req.user.id);
    res.render('users/friendsIndex', { allUsers });
}

module.exports.friendIndex = async(req, res) => {
    var { name } = req.params;
    var users = await User.find({'name': { $regex: name, $options: 'i'}});
    const allUsers = users.filter(user => user.id !== req.user.id);
    if (allUsers.length == 0) {
        req.flash('error', "There are no users with this name!");
        return res.redirect(`/users/friends/index`);
    }
    res.render('users/friendsIndex', { allUsers });
}

module.exports.nameAdminIndex = async(req, res) => {
    var { name } = req.params;
    var allUsers = await User.find({'name': { $regex: name, $options: 'i'}});
    if (allUsers.length == 0) {
        req.flash('error', "There are no users with this name!");
        return res.redirect(`/users/admin/index`);
    }
    res.render('users/adminIndex', { allUsers });
}

module.exports.followingIndex = async(req, res) => {
    var users = await User.find({ '_id': { $in: req.user.friends.map(friend => friend.toString())}});
    var allUsers = [];
    for (let user of users) {
        var aUser = {}
        aUser.name = user.name;
        aUser.email = user.email;
        aUser.height = user.height;
        aUser.weight = user.weight;
        aUser.exercises = await Exercise.find({ '_id': { $in: user.exercises.map(ex => ex.toString())}});
        aUser.recipes = await Recipe.find({ '_id': { $in: user.recipes.map(rec => rec.toString())}});
        allUsers.push(aUser);
    }
    res.render('users/following', { allUsers });
}