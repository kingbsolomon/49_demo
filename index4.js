"use strict";

// CLUB BRENT BRENT
// 21 to enter

let myCustomers = [18, 19, 21, 25, 40, 75 ,20, 36, 42, 24, 27, 9]

const hireSecurity = arr => {
    let bounced = arr.filter(patron => {
        if(patron >= 21)
            return true;
    })
    return bounced;
}

let newCustomers = hireSecurity(myCustomers);
console.log(newCustomers);

//drake

const fakeMustache = arr => {
    let unBounced = arr.map(patron=> {
        if(patron < 21){
            return 21;
        }
        else{
            return patron;
        }
    })
    return unBounced;
}

let customers = fakeMustache(myCustomers);
console.log(customers);
