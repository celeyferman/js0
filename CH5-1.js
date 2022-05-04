class Account {
    constructor(accountNum, balance) {
        this.accountNum = accountNum;
        this.balance = balance;
    }
}
  
class Client {
    constructor(accountNum, wallet) {
        this.accountNum = accountNum;
        this.wallet = wallet;
    }
    deposit(accountNum, amount) {
        if (amount < this.wallet) {
            let foundAccount = bank.find(accountHolder => accountHolder.accountNum === accountNum);
            foundAccount.balance += amount;
            console.log("The new balance is " + foundAccount.balance);
        } else {
            console.log("You can't deposit that quantity.");
        }
    }
    withdraw(amount) {
        let account = bank.find(accountHolder => accountHolder.accountNum === this.accountNum);
        if (account.balance > amount) {
            account.balance -= amount;
            console.log("The new balance is " + account.balance);
            this.wallet += amount;
        } else {
            console.log("Your balance cannot be below zero");
        }
    }
    checkBalance() {
        const account = bank.find(accountHolder => accountHolder.accountNum === this.accountNum);
        console.log("Your current balance is " + account.balance);
    }
}

let acc1 = new Account(1, 1000);
let acc2 = new Account(2, 2000);
let acc3 = new Account(3, 3000);
  
let bank = [acc1, acc2, acc3];
  
let cli1 = new Client(1, 500);
cli1.deposit(3,20);
cli1.withdraw(500);
  