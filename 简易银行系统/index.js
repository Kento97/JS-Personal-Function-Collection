/**
 * LeetCode NO.2043. 简易银行系统
 *
 */
"use strict";

class Bank {
    constructor(balance) {
        this.balance = balance;
    }

    transfer(account1, account2, money) {
        if (account1 <= this.balance.length && account2 <= this.balance.length) {
            if (money <= this.balance[account1 - 1]) {
                this.balance.splice(account2 - 1, 1, this.balance[account2 - 1] + money);
                this.balance.splice(account1 - 1, 1, this.balance[account1 - 1] - money);
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    deposit(account, money) {
        if (account <= this.balance.length) {
            this.balance.splice(account - 1, 1, this.balance[account - 1] + money);
            return true;
        } else {
            return false;
        }
    }

    withdraw(account, money) {
        if (account <= this.balance.length) {
            if (money <= this.balance[account - 1]) {
                this.balance.splice(account - 1, 1, this.balance[account - 1] - money);
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
