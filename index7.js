class BankAccount{
    constructor(balance){
        this.balance = balance
    }

    checkBalance(){
        console.log(`Your bank account balance is ${this.balance}`)
    }

    deposit(amt){
        this.balance += amt
    }

    withdraw(amt){
        this.balance -= amt
    }
}

class SavingsAccount extends BankAccount{
    constructor(balance, interestRate){
        super(balance);
        this.interestRate = interestRate;
    }
    addInterest(){
        this.balance += (this.balance * (this.interestRate/100))
    }
    checkBalance(){
        console.log(`Your savings account balance is ${this.balance}`)
    }
}

class CheckingAccount extends BankAccount{
    constructor(balance){
        super(balance);
        this.annualFee = 30;
    }
    writeACheck(amt){
        console.log(`I wrote a check! I am 70 or John!`)
        this.withdraw(amt);
    }
}

let ryanSavings = new SavingsAccount(10_000, 5);
ryanSavings.checkBalance();


