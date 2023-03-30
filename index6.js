//brents bank

class BankAccount {
    constructor(type, balance, interestRate){
        this.type = type;
        this.balance = balance;
        this.interestRate = interestRate;
        this.monthlyFee = 10;
    }

    displayInfo(){
        console.log(`Your ${this.type} account has a balance of ${this.balance}.`)
    }

    withdraw(amt){
        this.balance -= amt;
    }

    deposit(amt){
        this.balance += amt;
    }

    addInterest(){
        this.balance += (this.balance * (this.interestRate/100))
    }

    transfer(account, amt){
        this.withdraw(amt);
        account.deposit(amt); //brentBank.deposit, mikeBank.deposit      
    }
}

let isiahBank = new BankAccount("Checking", 6000000, 2);
isiahBank.displayInfo();

let brentBank = new BankAccount("Checking", 10, 0.25);
brentBank.displayInfo();
let mikeBank = new BankAccount("Savings", 2500, 3);

isiahBank.transfer(brentBank, 4000000)
isiahBank.displayInfo();
brentBank.displayInfo();
isiahBank.transfer(brentBank, 2000000)
isiahBank.displayInfo();
brentBank.displayInfo();
brentBank.transfer(mikeBank, 100000);
brentBank.displayInfo();
mikeBank.displayInfo();

let myArr = [1,2,3,4,5]
myArr.length;
myArr.push(6)

let myArr2 = [5,4,3,2,1]

