"use strict";
// console.log(this, "1");
// console.log(addTwoNumbers(20,30));
//console.log(addTwoNumbersArrow(40,50));

//make a guessing game, if the number guessed is less than the actual number
// console log, guess higher
//if the number guessed is higher than the actual number
//console log, guess lower
//lastly, if they guess the number
//console log CONGRATULATIONS!

// let myNumber = 52;
// let myGuess;

// while(myNumber != myGuess){
//     myGuess = prompt("Guess the number: ");
//     if(myGuess < myNumber){
//         console.log("Guess Higher!")
//     }
//     else if(myGuess > myNumber){
//         console.log("Guess Lower!")
//     }
//     else{
//         console.log("Congratulations!")
//     }
// }

//fizzbuzz

// count from 1-100, if the number is div by 3 -print fizz
// if the number is div by 5- print buzz
// if the number is div by 3 & 5- print fizzbuzz
// if number not div by 3,5, then print number

// for(let i=1; i <= 100; i++){
//     if(i%3===0 && i%5===0){
//         console.log("fizzbuzz")
//     }
//     else if(i%3===0){
//         console.log("fizz")
//     }
//     else if(i%5===0){
//         console.log("buzz")
//     }
//     else {
//         console.log(i)
//     }
// }

//                   0          1        2           3              4        5     
// let favFoods = ["Guydon", "Sushi", "Hamburger", "Drumsticks", "Pizza", "Steak"] //length -6

// for (let i=0; i<favFoods.length; i++){
//     console.log(favFoods[i])
// }


// create a function that takes in 2 triplet arrays [1,2,3]
// it will compare the values at the index location
// and it will return "wins" as an array ie [2,3,4] vs [1,3,5]

// function compareArrays (arr1, arr2){
//     let aWins = 0;
//     let bWins = 0;
//     for(let i=0; i<arr1.length; i++){
//         if(arr1[i] > arr2[i]){
//             aWins++;
//         }
//         else if (arr2[i] > arr1[i]){
//             bWins++;
//         }
//     }
//     return [aWins, bWins];
// }

// function addTwoNumbers (firstNumber, secondNumber) {
//     console.log(this, "2")
//     return firstNumber + secondNumber;
// }
console.log(this,"1");
function thisTest (){
    console.log(this, "2");
    function insideFunction (){
        console.log(this,"3");
    }
    const arrowFunction = () => console.log(this,"4");

    insideFunction();
    arrowFunction();
   
}

thisTest();

// const addTwoNumbersArrow = (firstNumber, secondNumber) => {
//     console.log(this)
//     return firstNumber + secondNumber;
// }

// console.log(addTwoNumbersArrow(40,50));

const arrowFunctionTest = () => console.log("hello")

const arrowFunctionTest2 = str => console.log(str)


// const compareArraysExpression = function(arr1, arr2){
//     let aWins = 0;
//     let bWins = 0;
//     for(let i=0; i<arr1.length; i++){
//         if(arr1[i] > arr2[i]){
//             aWins++;
//         }
//         else if (arr2[i] > arr1[i]){
//             bWins++;
//         }
//     }
//     return [aWins, bWins];
// }

// const compareArraysArrow = (arr1, arr2) => {
//     let aWins = 0;
//     let bWins = 0;
//     for(let i=0; i<arr1.length; i++){
//         if(arr1[i] > arr2[i]){
//             aWins++;
//         }
//         else if (arr2[i] > arr1[i]){
//             bWins++;
//         }
//     }
//     return [aWins, bWins];
// }

// let round1 = compareArraysExpression([2,2,2], [1,2,3]);
// console.log(round1)
// let round2 = compareArrays([3,2,1], [1,2,3]);
// console.log(round2);
// let round3 = compareArrays([0,0,0], [1,1,1]);
// console.log(round3);

// function concatTwoNames (fName, lName){
//     let fullName = fName + " " + lName;
//     return fullName;
// }

// let name1 = concatTwoNames("Bre", "Baker");
// console.log(name1);

// function bmiCalculator (height, weight){
//     let bmi = 703 * weight / (height * height);
//     return bmi;
// }


// function bmiClassification (bmi){
//     if(bmi > 30 ){
//         return("Obese");
//     }
//     else if(bmi < 29.9 && bmi > 25){
//         return("Overweight")
//     }
//     else if(bmi < 24.9 && bmi > 18.5){
//         return("Normal")
//     }
//     else if(bmi < 18.5){
//         return("Underweight")
//     }   
// }

// //string interpolation
// let bmi1 = bmiCalculator(66,200);
// let bmi1class = bmiClassification(bmi1);
// //console.log("Your BMI is: " + bmi1 + " Your are " + bmi1class); string concatination
// console.log(`Your BMI is ${bmi1}. You are ${bmi1class}.`) // string interpolation

// let bmi2 = bmiCalculator(70, 160);
// console.log(bmi2);
// bmiClassification(bmi2);