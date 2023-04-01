const mongoose = require('mongoose');
const {Schema} = mongoose;

const competitionSchema = new Schema({
    users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    duration: Date, 
    information: String,
    winner: {type: Schema.Types.ObjectId, ref: 'User'},
    prize: String
});

const Competition = mongoose.model('Competition', competitionSchema);

module.exports = Competition;