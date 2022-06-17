const prompt = require("prompt-sync")({ sigint: true })
const helper = require('./helper')
const task1 = require('./tasks/task1')
const task2 = require('./tasks/task2')
const task3 = require('./tasks/task3')

startEverything = async () =>{

    const prepareEverything = await helper.prepareEverythingToPlay();

    console.log("Chose a option:" + "\n" + "1) papir, skare, kamen" + "\n" + "2) palindrom "+ "\n" + "3) niz brojeva"+ "\n")
    var userInputOption = prompt(">")
       
    if(userInputOption === '1') {
        task1.playGameOne() 
    }else if (userInputOption === '2'){
        task2.playGameTwo()
    }
    else if (userInputOption === '3'){
        task3.playGameThree()
    }else{
        process.exit()
    }
    
}

startEverything();



