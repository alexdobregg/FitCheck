const mongoose = require('mongoose');
const {Schema} = mongoose;

const exerciseSchema = new Schema({
    name: String,
    muscle: String,
    image: String,
    instructions: String
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;

const workoutSchema = new Schema({
    name: String,
    exercises: [{type: Schema.Types.ObjectId, ref: 'Exercise'}]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;