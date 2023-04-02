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