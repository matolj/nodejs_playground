const defineWinner = (userInput) =>{
    const computerPlayers = ['papir', 'skare', 'kamen']

    const userChoice = computerPlayers[userInput-1]
    const computerChoice = computerPlayers[Math.floor(Math.random()*computerPlayers.length)]

    console.log('Game started!')
    console.log('You have chosen:' + userChoice + ' vs.' + ' Computer: ' + computerChoice)

    if(userChoice === computerChoice){
        console.log('Draw!')
        return
    }

    if(
        (userChoice === 'papir' && computerChoice === 'skare') ||
        (userChoice === 'skare' && computerChoice === 'kamen') ||
        (userChoice === 'kamen' && computerChoice === 'papir')
    ){
        console.log('Computer Win!')
        return
    }else{
        console.log('You Win!')
        return
    }

}

module.exports = {
    defineWinner
}