const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: String,
    description: String,
    winningOption: String,
    losingOption: String
});

const Player = mongoose.model('player', playerSchema);

module.exports = {
    Player
}