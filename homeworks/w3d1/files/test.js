// 1. SavingsAccount
var savingsAccount = new SavingsAccount(1234567890, 7.5);
savingsAccount.deposit(150.0); // Add Balance

describe("getInterest", function () {
	it("returns account's interest",
		function () {
			assert.equal(7.5, savingsAccount.getInterest());
		});
});
describe("addInterest", function () {
	it("returns added interest into this account",
		function () {
			assert.equal(11.25, savingsAccount.addInterest());
		});
});
describe("toString", function () {
	it("returns representation of this account",
		function () {
			assert.equal("Savings Account 1234567890: Balance 161.25, Interest: 7.5", savingsAccount.toString());
		});
});

// 2. CheckingAccount
var checkingAccount = new CheckingAccount(1234567890, 1000);
checkingAccount.deposit(150.0); // Add Balance

describe("getOverdraftLimit", function () {
	it("returns account's overdraft limit",
		function () {
			assert.equal(1000, checkingAccount.getOverdraftLimit());
		});
});
describe("deposit", function () {
	it("adds amount to balance and returns account's balance",
		function () {
			assert.equal(650, checkingAccount.deposit(500));
		});
});
describe("withdraw", function () {
	it("adds amount to balance and returns account's balance",
		function () {
			assert.equal(-850, checkingAccount.withdraw(1500));
		});
});
describe("toString", function () {
	it("returns representation of this account",
		function () {
			assert.equal("Checking Account 1234567890: Balance -850. Overdraft Limit: 1000", checkingAccount.toString());
		});
});

// 3. Bank
var bank = new Bank();

describe("addAccount", function () {
	it("adds a new account into bank",
		function () {
			assert.equal(1234567891, bank.addAccount());
		});
});
describe("addSavingsAccount", function () {
	it("adds a new savings account into bank",
		function () {
			assert.equal(1234567892, bank.addSavingsAccount(7.5));
		});
});
describe("addCheckingAccount", function () {
	it("adds a new checking account into bank",
		function () {
			assert.equal(1234567893, bank.addCheckingAccount(1000));
		});
});
describe("closeAccount", function () {
	it("removes an account from bank with the given number",
		function () {
			assert.equal(undefined, bank.closeAccount(1234567891));
		});
});
describe("accountReport", function () {
	it("returns string of a list of reports for all accounts",
		function () {
			assert.equal("Account 1234567892: balance 0\nAccount 1234567893: balance 0\n", bank.accountReport());
		});
});

describe("endOfMonth", function () {
	it("returns string of a list of reports for all accounts",
		function () {
			assert.equal("Interest added SavingsAccount 1234567892: balance: 0 interest: 0\n\n", bank.endOfMonth());
		});
});
