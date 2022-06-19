const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    winner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Player',
        required: true
    },
    loser: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Player',
        required: true
    },
    winnerType: String,
    loserType: String
});

const Game = mongoose.model('game', gameSchema);

module.exports = {
    Game
}