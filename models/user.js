const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    weight: Number,
    height: Number,
    birth_date: Date,
    gender: String,
    role: {
        type: String,
        default: 'basic'
    },
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
    recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
    workouts: [{type: Schema.Types.ObjectId, ref: 'Workout'}],
    exercies: [{type: Schema.Types.ObjectId, ref: 'Exercise'}]
});

userSchema.plugin(passportLocalMongoose);


const User = mongoose.model('User', userSchema);

module.exports = User;