"use strict";

/**
 * A Bank class
 * 
 * Provides the basic functionality that every bank should have
 */
class Bank {
    /**
     * Constructor for creating a new Account object
     * 
     * @param {Array} accounts a list of accounts in our bank
     */
	constructor() {
		this._accounts = [];
    }

	static lastNumber = 1234567890;

    /**
     * Method to generate number for a new account
     * 
     * @returns {number} new account number
     */
	static nextNumber() {
		return ++Bank.lastNumber;
	}

    /**
     * Method to add account into the bank
     *
     * @returns {number} created account number
     */
	addAccount() {
		let account = new Account( Bank.nextNumber() );
		this._accounts.push(account);
		return account._number;
    }

    /**
     * Method to add saving account into the bank
     *
     * @param {number} interest interest rate of the account
     * @returns {number} created account number
     */
	addSavingsAccount(interest) {
		let savingsAccount = new SavingsAccount( Bank.nextNumber(), interest );
		this._accounts.push(savingsAccount);
		return savingsAccount._number;
    }

    /**
     * Method to add checking account into the bank
     *
     * @param {number} overdraft overdraft limit rate of the account
     * @returns {number} created account number
     */
	addCheckingAccount(overdraft) {
		let checkingAccount = new CheckingAccount( Bank.nextNumber(), overdraft );
		this._accounts.push(checkingAccount);
		return checkingAccount._number;
    }

    /**
     * Method to remove account from the bank
     *
     * @param {number} number account number to be closed
     * @returns {undefined}
     */
	closeAccount(number) {
		this._accounts = this._accounts.filter( account => account._number !== number );
    }

    /**
     * Method to add account into the bank
     *
     * @returns {String} string of a list of reports for all accounts
     */
	accountReport() {
		let report = "";
		this._accounts.forEach( account => report += "Account " + account._number + ": balance " + account._balance+"\n" );
		return report;
    }
	
    /**
	 * Method to add account into the bank
     *
	 * @returns {String} string of a list of reports for all accounts
     */
	endOfMonth() {
		let report = "";
		this._accounts.forEach( account =>{ report += account.endOfMonth()+"\n"; console.log(report); });
		return report;
    }
}