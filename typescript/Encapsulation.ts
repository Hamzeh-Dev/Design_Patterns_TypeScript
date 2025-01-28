

class BackAccount {
    private _balance: number;
    constructor(initialbalance: number) {
        this._balance = initialbalance;
    }

    public getBalance(): number {
        return this._balance;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Invalid Amount");
            return;
        }

        this._balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Invalid Amount");
            return;
        }

        if (this._balance - amount < 0) {
            console.log("Not Enough Balance");
            return;
        }

        this._balance -= amount;
    }
}

const myAccount = new BackAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);

console.log("Current Balance", myAccount.getBalance());

