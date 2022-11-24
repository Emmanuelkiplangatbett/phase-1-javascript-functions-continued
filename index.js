// code  solution here
function saturdayFun(Fun = "roller-skate"){
    return`This Saturday, I want to ${Fun}!`
}
const mondayWork = function(Work = "go to the office"){
    return`This Monday, I will ${Work}.`
}
function wrapAdjective(flair="*"){
    return function(happy="special"){
        return `You are ${flair}${happy}${flair}!`
    }
}
