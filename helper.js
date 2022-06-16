const mongoose = require("mongoose")
const Player = require('./models/player').Player;
const Game = require('./models/game').Game;

const defineWinner = async (userInput) =>{
    const computerPlayers = ['Papir', 'Skare', 'Kamen']

    const userChoice = computerPlayers[userInput-1]
    const computerChoice = computerPlayers[Math.floor(Math.random()*computerPlayers.length)]

    console.log('Game started!')
    console.log('You have chosen:' + userChoice + ' vs.' + ' Computer: ' + computerChoice)

    if(userChoice === computerChoice){
        console.log('Draw!')
        return
    }

    if(
        (userChoice === 'Papir' && computerChoice === 'Skare') ||
        (userChoice === 'Skare' && computerChoice === 'Kamen') ||
        (userChoice === 'Kamen' && computerChoice === 'Papir')
    ){
        console.log('Computer Win!')
        const winningplayer = await Player.findOne({name: computerChoice})
        const losingplayer = await Player.findOne({name: userChoice})
        return await Game.create({
            winner: winningplayer._id,
            loser: losingplayer._id,
            winnerType: "Computer",
            loserType: "User"
        })
    }else{
        console.log('You Win!')
        const winningplayer = await Player.findOne({name: userChoice})
        const losingplayer = await Player.findOne({name: computerChoice})
        return await Game.create({
            winner: winningplayer._id,
            loser: losingplayer._id,
            winnerType: "User",
            loserType: "Computer"
        })
    }

}

const setDbConnection = async () => {

    const connectDB = 'mongodb+srv://matolj:test@cluster0.ylfzucb.mongodb.net/?retryWrites=true&w=majority';

    try {
        const mongooseConn = await mongoose.connect(connectDB,{ useNewUrlParser: true, useUnifiedTopology:true });
        console.log("Database connected!");
    }catch{
        throw new Error("Something went wrong with db connection!"); 
    }
    
}

const insertPlayers = async () => {
    const countPlayers = await Player.countDocuments();

    if (countPlayers == 3) {
        return countPlayers
    }else{
        const playersData = [
            {"name": "Papir", "description": "papir to sam ja", "winningOption": "Kamen", "losingOption": "Skare"},
            {"name": "Skare", "description": "skare to sam ja", "winningOption": "Papir", "losingOption": "Kamen"},
            {"name": "Kamen", "description": "kamen to sam ja", "winningOption": "Skare", "losingOption": "Papir"}
        ]
        return await Player.insertMany(playersData)
    }
}

const prepareEverythingToPlay = async () => {
    
    try{
        const dbConnection = await setDbConnection();
        const preparePlayers = await insertPlayers();
        return {'message': 'Everything ok'}
    }catch{
        throw new Error("Something went wrong!"); 
    }
     
}

const isPalindrome = (str )=>{
    str = str.toLowerCase().replace(/\W+|_/g, '');
    return str == str.split('').reverse().join('');
}

module.exports = {
    defineWinner,
    setDbConnection,
    insertPlayers,
    prepareEverythingToPlay,
    isPalindrome
}