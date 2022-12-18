console.log("it works");

// Homework 1 

function tellStory(name, mood, activity){
    console.log(`This is ${name}. ${name} is a nice person. Today they are ${mood}. They ${activity} all day.The end.`);
}

tellStory("Joce", "Exhausted", "Played Football");

// Homework 2

const numArr = [];

function calculateSum (numArr){
    let sum = 0;
    for (i = 0; i < numArr.length; i++){
    if(validateNumber(numArr[i])){
        return `Theres is an invalid number in the array`;
    }
    sum += numArr[i];
    }
    return sum;
}

function validateNumber(num){
    if (typeof num !== "number") 
    return true;
}

console.log(calculateSum([1,2,3,4,5]));
console.log(calculateSum([1,2,`3`,4,5]));

// Homework 3

const words = ["Hello", "there", "students", "of", "SEDC", "!"];

function createSentence(words){
    let sentence = "";
    for (i = 0; i < words.length; i++){
        sentence += words[i] + " ";
}
    return sentence;
}

console.log(createSentence(words));

// Homework 4


function oddOrEven (){
    for (let i = 1; i <= 20; i++){
        if (i % 2){ 
            console.log(`${i} is an odd number`);
        }
        else{
            console.log(`${i} is an even number`);
        }
    }   
}

oddOrEven();


// Homework 5 

const arr = [3,5,6,8,11];
let min = arr[0];
let max = 0;
let sum = 0;

function minMaxSum(){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
        min = arr[i];
        }
        if(arr[i] > max){
        max = arr[i];
        }
        sum = max + min;
    }
}

minMaxSum();
console.log(max,min,sum);


// Homework 6

const firstName = ["Lana", "Johnny"];
const lastName = ["Rhoades", "Sins"];

function fullName(){
    for(let i = 0; i < firstName.length; i++){ 
    console.log(`${i + 1} ${firstName[i]} ${lastName[i]}`);
    }
}

fullName();