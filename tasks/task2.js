const prompt = require("prompt-sync")({ sigint: true })
const helper = require('../helper')

const playGameTwo = async () =>{
    const userInputPalindrome = prompt("Enter a word to check is it a palindrome: ")
    const isPalindrome = helper.isPalindrome(userInputPalindrome.trim())
    if(isPalindrome) {
        console.log(userInputPalindrome.trim() + " is Palindrome !!!! Bravo :)")
    }else{
        console.log(userInputPalindrome.trim() + " is not Palindrome !!!! :(")
    }
    process.exit()
}

module.exports = {
    playGameTwo
}