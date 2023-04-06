import Transaction from "./transaction.js";
import Statement from "./statement.js";

// class + constructor and transactions []

class Account {
  #defaultBalance;
  constructor(defaultBalance = 0) {
    this.#defaultBalance = defaultBalance;
    this.transactions = [];
  }
  getDefaultBalance() {
    return this.#defaultBalance;
  }
  getTransactions() {
    return this.transactions;
  }
  //method to get the total of the account
  // be called when making a deposit / withdrawal
  //invoked as an instance of the account class
  totalBalance(credit, debit) {
    this.#defaultBalance += credit || -debit;
  }
  //method takes the transaction as parameter
  //uss the totalBalance to update the account balance
  //sets the transaction balance on the transaction object
  // push(transaction) add the transaction object to the transactions array
  updateBalance(transaction) {
    this.totalBalance(transaction.getCredit(), transaction.getDebit());
    transaction.setBalance(this.getDefaultBalance());
    return this.transactions.push(transaction);
  }
}

export default Account;
