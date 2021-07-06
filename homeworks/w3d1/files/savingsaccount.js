"use strict";

/**
 * A Savings Account class
 */
class SavingsAccount extends Account {
    /**
     * Constructor for creating a new Savings Account object
     * 
     * @param {number} interest the interest for this account
     */
    constructor(number, interest) {
		super(number);
        this._interest = interest;
    }

    /**
     * Getter for the 'private' number field
     * 
     * @returns {number} the interest
     */
    getInterest() {
        return this._interest;
    }

    /**
     * Setter for the 'private' interest field
     * 
     * @param {number} interest interest rate of the account
     * @returns {undefined}
     */
    setInterest(interest) {
        this._interest = interest;
    }

    /**
     * Interest calculator for the 'private' balance field (balance + (balance*interest)/100)
     * 
     * @returns {number} interest added
     */
	addInterest() {
        let interest = (this._balance * this._interest) / 100;
        this._balance += interest;
		return interest;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Savings Account " + this._number + ": Balance " + this._balance + ", Interest: " + this._interest;
    }

    /**
	 * Method to add account into the bank
     *
	 * @returns {String} string of a report for account
     */
	endOfMonth() {
		let interest = this.addInterest();
        return "Interest added SavingsAccount "+this._number+": balance: "+this._balance+" interest: "+interest;
    }
}