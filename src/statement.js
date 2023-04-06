import chalk from "chalk";
class Statement {
  print(transactions) {
    console.log("  date        || credit  || debit  || balance");
    for (let i = transactions.length - 1; i >= 0; i--) {
      let isBalancePositive = transactions[i].getBalance() >= 0 ? true : false;
      if (transactions[i].getCredit() == 0) {
        console.log(
          `  ${transactions[i].getDate()}  ||         || ${chalk.red(
            transactions[i].getDebit().toFixed(2)
          )} || ${
            isBalancePositive
              ? chalk.green(transactions[i].getBalance().toFixed(2))
              : chalk.red(transactions[i].getBalance().toFixed(2))
          }`
        );
      }
      if (transactions[i].getDebit() == 0) {
        console.log(
          `  ${transactions[i].getDate()}  || ${chalk.green(
            transactions[i].getCredit().toFixed(2)
          )} ||        || ${
            isBalancePositive
              ? chalk.green(transactions[i].getBalance().toFixed(2))
              : chalk.red(transactions[i].getBalance().toFixed(2))
          }`
        );
      }
    }
  }
}
export default Statement;
