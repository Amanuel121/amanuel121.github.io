"use strict";

/**
 * A Checking Account class
 */
class CheckingAccount extends Account {
    /**
     * Constructor for creating a new Checking Account object
     * 
     * @param {number} overdraftLimit the overdraftLimit for this account
     */
    constructor(number, overdraftLimit) {
		super(number);
        this._overdraftLimit = overdraftLimit;
    }

    /**
     * Getter for the 'private' number field
     * 
     * @returns {number} the overdraftLimit
     */
    getOverdraftLimit() {
        return this._overdraftLimit;
    }

    /**
     * Setter for the 'private' overdraftLimit field
     * 
     * @param {number} overdraftLimit money to be deposited into the account 
     * @returns {undefined}
     */
    setOverdraftLimit(overdraftLimit) {
        this._overdraftLimit = overdraftLimit;
    }

    /**
     * Method to add money into the account / overridden
     * 
     * @param {number} amount money to be deposited into the account 
     * @returns {number} balance for this account
     * @throws {RangeError} when amount is less than or equal to zero
     */
	 deposit(amount) {
        if (amount <= 0) {
            throw new RangeError("Deposit amount has to be greater than zero");
        }
        this._balance += amount;
		return this._balance;
    }

    /**
     * Method to take money out of the account / overridden
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {number} balance for this account
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this._overdraftLimit)) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
		return this._balance;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Checking Account " + this._number + ": Balance " + this._balance + ". Overdraft Limit: " + this._overdraftLimit;
    }

    /**
	 * Method to add account into the bank
     *
	 * @returns {String} string of a report for account
     */
	endOfMonth() {
        let result = "";
		if( this._balance < 0 ) result = "CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this._overdraftLimit;
        return result;
    }
}