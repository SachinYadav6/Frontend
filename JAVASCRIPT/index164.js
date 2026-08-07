function createBankAccount(balance) {
    return {
        deposit(amount) {
            balance += amount;
            console.log("Balance:", balance);
        },
        withdraw(amount) {
            balance -= amount;
            console.log("Balance:", balance);
        }
    };
}

const account = createBankAccount(1000);

account.deposit(500);   // Balance: 1500
account.withdraw(200);  // Balance: 1300