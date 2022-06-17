const helper = require('../helper')

const playGameThree = async () =>{
    let arr = [ 1, 2, 4, 5, 10, 16]
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
}

module.exports = {
    playGameThree
}