const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports.renderNew = (req, res) => {
    res.render('recipes/new');
};

module.exports.createRecipe = async (req, res) => {
    const exercise = new Recipe(req.body.recipe);
    await exercise.save();
    req.flash('success', 'Successfully created a new recipe!');
    res.redirect('/');
}

module.exports.index = async(req, res) => {
    const allRecipes = await Recipe.find({});
    res.render('recipes/index', { allRecipes });
};

module.exports.favoriteIndex = async(req, res) => {
    var allRecipes = await Recipe.find({ '_id': { $in: req.user.recipes.map(ex => ex.toString())}});
    res.render('recipes/index', { allRecipes });
};

module.exports.adminIndex = async(req, res) => {
    const allRecipes = await Recipe.find({}); 
    res.render('recipes/adminIndex', { allRecipes });
};

module.exports.deleteRecipe = async(req, res) => {
    const { id } = req.params;
    const allUsers = await User.find({});
    for (let user of allUsers) {
        var idx = user.recipes.findIndex(rec => rec.toString() === id);
        if (idx != -1) {
            user.recipes.splice(idx, 1);
        }
        await User.findByIdAndUpdate(user.id, { ...user });
    }
    await Recipe.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted the recipe!')
    res.redirect('/recipes/admin/index');
};

module.exports.renderEdit = async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (!recipe) {
        req.flash('error', 'Cannot find that recipe!');
        return res.redirect('/recipes/admin/index');
    }
    res.render('recipes/edit', { recipe });
};

module.exports.editRecipe = async(req, res) => {
    const { id } = req.params;
    await Recipe.findByIdAndUpdate(id, { ...req.body.recipe });
    req.flash('success', 'Successfully updated the recipe!');
    res.redirect(`/recipes/${id}`);
};
