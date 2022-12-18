console.log("it works");

// Homework 1 resenie 1 
let phonePrice = 119.95;
let phoneTax = 0.05;
let phoneTaxAndPhonePrice = phonePrice + phonePrice * phoneTax;
let sum = phoneTaxAndPhonePrice * 30;
console.log(sum);

// Homework 1 resenie 2
let allPhonePrices = 30 * 119.95;
let allPhoneTax = 0.05 * allPhonePrices;
let allSumPrice = allPhonePrices + allPhoneTax;
console.log(allSumPrice);

// Homework 2
let year = parseInt(prompt("Enter your birthyear"));
year = (year - 4) % 12;

if (year < 1){
    console.log("Try using valid year");
}
else if (year === 0){
    console.log("Your Chinese Zodiac is Rat");
}
else if (year === 1){
    console.log("Your Chinese Zodiac is Ox");
}
else if (year === 2){
    console.log("Your Chinese Zodiac is Tiger");
}
else if (year === 3){
    console.log("Your Chinese Zodiac is Rabbit");
}
else if (year === 4){
    console.log("Your Chinese Zodiac is Dragon");  
}
else if (year === 5){
    console.log("Your Chinese Zodiac is Snake"); 
}
else if (year === 6){
    console.log("Your Chinese Zodiac is Horse"); 
}
else if (year === 7){
    console.log("Your Chinese Zodiac is Goat"); 
}
else if (year === 8){
    console.log("Your Chinese Zodiac is Monkey"); 
}
else if (year === 9){
    console.log("Your Chinese Zodiac is Rooster");
}
else if (year === 10){
    console.log("Your Chinese Zodiac is Dog");
}
else if(year === 11){
    console.log("Your Chinese Zodiac is Pig");
}
