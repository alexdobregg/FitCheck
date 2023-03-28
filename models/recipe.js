const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipeSchema = new Schema({
    name: String,
    image: String,
    instructions: String,
    ingredients: [{
        name: String,
        quantity: Number,
        unite: String
    }]
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;