// 4
const sum = function (numbers) {
	return numbers.reduce( (a, b) => a+b, 0 );
}
console.log("sum([1,2,3,4]) Expecting 10 -> "+sum([1,2,3,4]));

const multiply = function (numbers) {
	return numbers.reduce( (a, b) => a*b, 1 );
}
console.log("multiply([1,2,3,4]) Expecting 24 -> "+multiply([1,2,3,4]));

// 5
const reverse = function (reversable) {
	let result="";
	reversable.split('').map( letter => result=letter+result );
	return result;
}
console.log("reverse('amanuelbsimegn') Expecting 'ngemisbleunama' -> "+reverse('amanuelbsimegn'));

// 7
const filterLongWords = function (words,i) {
	return words.filter( word => word.length > i );
}
console.log("findLongestWord(['bird','is','the','word'],3) Expecting 'bird','word' -> "+filterLongWords(['bird','is','the','word'], 3));

// Testing
describe("sum", function () {
	it("takes a list of numbers, and returns their sum",
		function () {
			assert.equal(10, sum(1,2,3,4));
		});
});

describe("multiply", function () {
	it("takes a list of numbers, and returns their product",
		function () {
			assert.equal(24, multiply(1,2,3,4));
		});
});

describe("reverse", function () {
	it("takes a string, and returns its characters in reversed order",
		function () {
			assert.equal('ngemisbleunama', reverse('amanuelbsimegn'));
		});
});

describe("filterLongWords", function () {
	it("takes a list of strings, and returns words longer than i",
		function () {
			assert.equal(['bird','word'], filterLongWords(['bird','is','the','word'], 3));
		});
});
