const prompt = require("prompt-sync")({ sigint: true })
const helper = require('../helper')

const playGameOne = async () =>{
    var userInputPlayGame1 = prompt("Are you read to play Y/N :")
    if (userInputPlayGame1 === 'Y' ){
        var userWinnerCounter = 0
        var computerWinnerCounter = 0
        do {
            const userInputPlayer = prompt("User input - Chose your player 1) papir , 2) skare , 3) kamen : ")
            const winner = await helper.defineWinner(userInputPlayer)
            if (winner === 'You Win'){
                userWinnerCounter++;
            }else if (winner === 'Computer Win'){
                computerWinnerCounter++;
            }
            console.log('Result -> User: ' + userWinnerCounter + ' Computer: ' + computerWinnerCounter)
            userInputPlayGame1 = prompt("Do you want play more Y/N : ")

        }while (userInputPlayGame1 === 'Y')
    }else{
        process.exit()
    }
}

module.exports = {
    playGameOne
}
