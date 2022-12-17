console.log("it works");

// Homework 1 
function returnDiffType(parameter){
    console.log(typeof parameter);
}

returnDiffType({name: "Joce"});
returnDiffType(true);
returnDiffType(69);
returnDiffType("jabuka");
returnDiffType();

// Homework 2

function convertDogYears(years){
    let dogYears = years * 7;
    console.log( `Your dog is ${dogYears} years old in human years`);
}

convertDogYears(7);

function convertHumanYears(years){
    let humanYears = parseInt(years / 7);
    console.log( `You are ${humanYears} years old in dog years`);
}

convertHumanYears(81);

// Homework 3

let balance = 20000;

function withdrawMoney(){
    const withdraw = prompt("How much would you like to withdraw?");
    if (withdraw > balance){
        console.log(`You dont have enough money in your bank account. You have $ ${balance} left in your bank account`);
        return;
    }
    balance -= withdraw;
    console.log(`You withdrew $ ${withdraw}. You have $ ${balance} left in your bank account`);
}

withdrawMoney();
withdrawMoney();