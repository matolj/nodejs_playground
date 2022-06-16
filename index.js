const prompt = require("prompt-sync")({ sigint: true })
const helper = require('./helper')

startingEverything = async () =>{

    const prepareEverything = await helper.prepareEverythingToPlay();

    console.log("Chose a option:" + "\n" + "1) papir, skare, kamen" + "\n" + "2) palindrom "+ "\n" + "3) niz brojeva"+ "\n")
    var userInputOption = prompt(">")
        
    if(userInputOption === '1') {
            // game1
        var userInputPlayGame1 = prompt("Are you read to play Y/N :")
        
        do {
            const userInputPlayer = prompt("User input - Chose your player 1) papir , 2) skare , 3) kamen : ")
            await helper.defineWinner(userInputPlayer)
            userInputPlayGame1 = prompt("Do you want play more Y/N : ")
        
        }while (userInputPlayGame1 === 'Y')
    }

}

startingEverything();



