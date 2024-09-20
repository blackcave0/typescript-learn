/* 
  -> Create a typescript class BankAccount with a private property _balance intialised to 0.
  -> Implement a getter method getBalance that returns the current balance.
  -> Implement a setter method balance that updates the balance if the new value is non-negative. Otherwise, log an error message.
  -> Instantiate an object of the BankAccount class.
  -> Use the setter to set the balance to 1000 and use the getter to display the updated balance.
  -> Try setting a negative balance using the setter. What output do you expect?
*/

class BankAccount {
  private _balance :number = 0;

  public get balance ():number{
    return this._balance
  }

  public set balance (newBalance) {
    if(newBalance < 0) {
      throw new Error("Balance cannot be negative");
    } else {
      this._balance = newBalance;
    } 
  }
  
}

const account = new BankAccount();
account.balance = 10;
console.log(account.balance);

