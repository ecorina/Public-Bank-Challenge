// encapsulate the data for date credit debit balance

class Transaction {
  #date;
  #credit;
  #debit;
  #balance;
  constructor(
    date = new Date().toLocaleDateString("en-GB", { timeZone: "UTC" }),
    credit,
    debit,
    balance
  ) {
    this.#date = date;
    this.#credit = credit;
    this.#debit = debit;
    this.#balance = balance;
  }
  getDate() {
    return this.#date;
  }
  getCredit() {
    return this.#credit;
  }
  getDebit() {
    return this.#debit;
  }
  getBalance() {
    return this.#balance;
  }
  setCredit(deposit) {
    return (this.#credit = deposit);
  }
  setDebit(withdrawal) {
    return (this.#debit = withdrawal);
  }
  setDate(date) {
    return (this.#date = date);
  }
  setBalance(balance) {
    return (this.#balance = balance);
  }
}

export default Transaction;
