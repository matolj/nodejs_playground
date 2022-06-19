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
        return "Draw"
    }

    if(
        (userChoice === 'Papir' && computerChoice === 'Skare') ||
        (userChoice === 'Skare' && computerChoice === 'Kamen') ||
        (userChoice === 'Kamen' && computerChoice === 'Papir')
    ){
        console.log('Computer Win!')
        const winningplayer = await Player.findOne({name: computerChoice})
        const losingplayer = await Player.findOne({name: userChoice})
        const createGame = await Game.create({
            winner: winningplayer._id,
            loser: losingplayer._id,
            winnerType: "Computer",
            loserType: "User"
        })
        return 'Computer Win'
    }else{
        console.log('You Win!')
        const winningplayer = await Player.findOne({name: userChoice})
        const losingplayer = await Player.findOne({name: computerChoice})
        const createGame = await Game.create({
            winner: winningplayer._id,
            loser: losingplayer._id,
            winnerType: "User",
            loserType: "Computer"
        })
        return 'You Win'
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
    str = str.toLowerCase().replace(/[\W_]/g, '');
    //str = str.replace(/[0-9]/g, '');
    return str == str.split('').reverse().join('');
}

const findMinimumLengthOfTheSequence = (S, m, n) => {
    let table = [];
    for(let i = 0;i<m+1;i++){
       table[i] = [];
       for(let j = 0;j<n+1;j++){
              table[i][j] = 0;
       }
    }
 
    // Loop to initialize the array
    // as infinite in the row 0
    for (let i = 1; i <= n; i++) {
        table[0][i] = Number.MAX_VALUE - 1;
    }
 
    // Loop to find the solution
    // by pre-computation for the
    // sequence
    for (let i = 1; i <= m; i++) {
 
        for (let j = 1; j <= n; j++) {
            if (S[i - 1] > j) {
                table[i][j]
                    = table[i - 1][j];
            }
            else {
 
                // Minimum possible
                // for the previous
                // minimum value
                // of the sequence
                table[i][j]
                    = Math.min(
                        table[i - 1][j],
                        table[i][j - S[i - 1]] + 1);
            }
        }
    }
    return table[m][n];
}


module.exports = {
    defineWinner,
    setDbConnection,
    insertPlayers,
    prepareEverythingToPlay,
    isPalindrome,
    findMinimumLengthOfTheSequence
}