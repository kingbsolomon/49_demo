"use strict";

function walkTheDog (){
    console.log("I am walking the dog!")
}

const playFetch = () => {
    console.log("I am throwing the stick, the dog fetches it!")
}

function interactWithDog (callback){
    console.log("I have called the dog over!")
    callback();
}

interactWithDog(walkTheDog);
interactWithDog(playFetch);
interactWithDog(function(){console.log("The dog gets in trouble")})
interactWithDog(function(){console.log("The dog goes skydiving")})