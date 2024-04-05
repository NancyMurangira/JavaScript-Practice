function monthDays(month) 
{ switch (month) {
     case 1: 
     case 3: 
     case 5: 
     case 7: 
     case 8: 
     case 10: 
     case 12: 
     return 31; 
     case 4: 
     case 6: 
     case 9: 
     case 11: 
     return 30; 
     case 2: 
     return 28; 
     default:
    } 
}

console.log(monthDays(10));


function DaysNaming(day){
let dayName;
switch(day){
    case 1: 
    dayName = "Monday";
    break;
    case 1: 
    dayName = "Tuesday";
    break;
    case 1: 
    dayName = "Wednesday";
    break;
    case 1: 
    dayName = "Thursday";
    break;
    case 1: 
    dayName = "Friday";
    break;
    case 1: 
    dayName = "Saturday";
    break;
    case 1: 
    dayName = "Sunday";
    break;
   default:
    dayName = "Invalid day";
}
return dayName;
}

console.log(DaysNaming(5));



// A function that takes a string and a number as input amd returns a new string that repeats the input string the specified number of times

function repeatString(str, times){
    let result = "";
    for (let i = 0; i< times; i++) {
        result += str;
    }
    return result;
}

console.log(repeatString("Beautiful", 5));


// a function that calculate the factorial of a given non-negative integer.

function NonNegativeInteger(num){
if(n == 0 || n == 1 ) {
    return 1;
}
else{ 
    
    let result = 1;
    for (let i =2; i<=n; i++){
        result*= i;
    }
}
}

console.log(NonNegativeInteger(3));


// a function that takes a character as input and returns true if it's a vowel, and false otherwise

function checkvowel (character){
    const vowels = ["a", "e", "o","u"];
    vowels.includes(character);
}
console.log(checkvowel("u"));
console.log(checkvowel("E"))
