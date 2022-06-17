const prompt = require("prompt-sync")({ sigint: true })
const helper = require('./helper')

startEverything = async () =>{

    const prepareEverything = await helper.prepareEverythingToPlay();

    console.log("Chose a option:" + "\n" + "1) papir, skare, kamen" + "\n" + "2) palindrom "+ "\n" + "3) niz brojeva"+ "\n")
    var userInputOption = prompt(">")
        
    if(userInputOption === '1') {
            // game1
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
    }else if (userInputOption === '2'){
        const userInputPalindrome = prompt("Enter a word to check is it a palindrome: ")
        const isPalindrome = helper.isPalindrome(userInputPalindrome.trim())
        if(isPalindrome) {
            console.log(userInputPalindrome.trim() + " is Palindrome !!!! Bravo :)")
        }else{
            console.log(userInputPalindrome.trim() + " is not Palindrome !!!! :(")
        }
    }
    else if (userInputOption === '3'){
        let arr = [ 2, 4, 5, 10, 16]
        let numberToRich = 3
        let arrFiltered = arr.filter((num) => num <= numberToRich)
        arrFindNumber = arrFiltered.find((num)=> num == numberToRich)
        console.log("\n") 
        if(arrFindNumber == numberToRich){
            console.log("Output: " + 1)     
            process.exit()
        }else{
            arrLen = arrFiltered.length
            let output = helper.findMinimumLengthOfTheSequence(arr, arrLen, numberToRich)
            if (Number.isSafeInteger(output)) {
                console.log("Output: " + output)
            }else{
                console.log("Output: -1")
            }     
            process.exit()
        }
    
    }else{
        process.exit()
    }

}

startEverything();



