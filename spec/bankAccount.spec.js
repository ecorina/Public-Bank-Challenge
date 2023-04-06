import Transaction from "../src/transaction.js";
import Account from "../src/account.js";
import Statement from "../src/statement.js";

let account;
let statement;
let transaction;
let transaction1;
let result;

describe("tests", () => {
  it("Test1  deposit", () => {
    transaction = new Transaction();
    transaction.setCredit(1000.0);
    result = transaction.getCredit();
    expect(result).toBe(1000.0);
  });

  it("Test2 date", () => {
    transaction = new Transaction();
    transaction.setDate(
      new Date(2012, 0, 10).toLocaleDateString("en-GB", { timeZone: "UTC" })
    );
    result = transaction.getDate();
    expect(result).toMatch("10/01/2012");
  });

  it("Test3 withdrawal ", () => {
    transaction = new Transaction();
    transaction.setDebit(500);
    result = transaction.getDebit();
    expect(result).toBe(500);
  });

  it("Test4 account balance + transaction", () => {
    transaction = new Transaction(
      (new Date(2010, 4, 10).toLocaleDateString("en-GB", { timeZone: "UTC" }),
      200000,
      0,
      0)
    );
  });

  it("Test5 print", () => {
    transaction = new Transaction(
      (new Date(2010, 4, 10).toLocaleDateString("en-GB", { timeZone: "UTC" }),
      200000,
      0,
      0)
    );

    transaction1 = new Transaction(
      (new Date(2010, 4, 10).toLocaleDateString("en-GB", { timeZone: "UTC" }),
      0,
      70,
      0)
    );
    account = new Account();
    statement = new Statement();

    account.updateBalance(transaction);
    account.updateBalance(transaction1);
    const spy = spyOn(statement, "print");
    statement.print(account.getTransactions());

    expect(spy).toHaveBeenCalled();
  });
});
