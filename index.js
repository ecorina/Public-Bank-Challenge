import Transaction from "./src/transaction.js";
import Account from "./src/account.js";
import Statement from "./src/statement.js";

const transaction1 = new Transaction(
  new Date(2012, 0, 10).toLocaleDateString("en-GB", { timeZone: "UTC" }),
  1000.0,
  0,
  0
);

const transaction2 = new Transaction(
  new Date(2012, 0, 13).toLocaleDateString("en-GB", { timeZone: "UTC" }),
  2000.0,
  0,
  0
);

const transaction3 = new Transaction(
  new Date(2012, 0, 14).toLocaleDateString("en-GB", { timeZone: "UTC" }),
  0,
  500.0,
  0
);

const account = new Account();

account.updateBalance(transaction1);
account.updateBalance(transaction2);
account.updateBalance(transaction3);

const statement = new Statement();
statement.print(account.getTransactions());
