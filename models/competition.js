const { boolean } = require('joi');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const competitionSchema = new Schema({
    participants: [{
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        caloriesBurned: Number
    }],
    active: {
        type: Boolean,
        default: true
    },
    start_date: Date,
    end_date: Date, 
    information: String,
    type: String,
    prize: String
});

const Competition = mongoose.model('Competition', competitionSchema);

module.exports = Competition;