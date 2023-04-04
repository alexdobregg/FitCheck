const Recipe = require('../models/recipe');

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