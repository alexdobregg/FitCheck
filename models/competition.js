const { boolean } = require('joi');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const competitionSchema = new Schema({
    participants: [{type: Schema.Types.ObjectId, ref: 'User'}],
    active: {
        type: Boolean,
        default: true
    },
    start_date: Date,
    end_date: Date, 
    information: String,
    winner: {type: Schema.Types.ObjectId, ref: 'User'},
    prize: String
});

const Competition = mongoose.model('Competition', competitionSchema);

module.exports = Competition;