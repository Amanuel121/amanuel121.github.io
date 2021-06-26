// TEST
function testFunc(expected,found) {
	if (expected === found) {
		return "TEST SUCCEEDED";
	} else {
		return "TEST FAILED.  Expected " + expected + " found " + found;
	}
}

// 1
function max(a,b) {
	if(a > b) return a;
	return b;
}
console.log("max(12,3) Expecting 12 -> "+testFunc(12,max(12,3)));

// 2
function maxOfThree(a,b,c) {
	return max((a,b),c);
}
console.log("maxOfThree(11,2,23) Expecting 23 -> "+testFunc(23,maxOfThree(11,2,23)));

// 3
function isVowel(letter) {
	// Exit if "letter" is NOT a Char
	if(letter.length !== 1) return false;
	// Keep an array of vowels
	let vowels = ['a','e','i','o','u'];
	// Get the index of "letter" if it exists
	let index = vowels.indexOf(letter);
	// If "letter" is found in array return true otherwise, false
	if( (index >= 0) && (index <= 4) ) return true;
	return false;
}
console.log("isVowels('a') Expecting true -> "+testFunc(true,isVowel('a')));

// 4
function sum(numbers) {
	let result = 0;
	numbers.forEach(number => {
		result += number;
	});
	return result;
}
console.log("sum([1,2,3,4]) Expecting 10 -> "+testFunc(10,sum([1,2,3,4])));

function multiply(numbers) {
	let result = 1;
	numbers.forEach(number => {
		result *= number;
	});
	return result;
}
console.log("multiply([1,2,3,4]) Expecting 24 -> "+testFunc(24,multiply([1,2,3,4])));

// 5
function reverse(reversable) {
	let result="";
	reversable.split('').forEach(letter => {
		result=letter+result;
	});
	return result;
}
console.log("reverse('amanuelbsimegn') Expecting 'ngemisbleunama' -> "+testFunc('ngemisbleunama',reverse('amanuelbsimegn')));

// 6
function findLongestWord(words) {
	let longest = 0;
	words.forEach(word => {
		let wrdLgt=word.length;
		if(wrdLgt > longest) longest = wrdLgt;
	});
	return longest;
}
console.log("findLongestWord(['bird','is','the','word']) Expecting 4 -> "+testFunc(4,findLongestWord(['bird','is','the','word'])));

// 7
function filterLongWords(words,i) {
	let newWords = [];
	words.forEach(word => {
		if(word.length > i) newWords.push(word);
	});
	return newWords;
}
console.log("findLongestWord(['bird','is','the','word'],3) Expecting 'bird','word' -> "+testFunc(['bird','word'],filterLongWords(['bird','is','the','word'],3)));

// 8
const a = [1,3,5,3,3]; 
const b = a.map(function(elem,i,array) {
  return elem*10;
})
console.log(b.toString());
const c = a.filter(function(elem,i,array){
  return elem === 3;});
console.log(c.toString());
const d = a.reduce(function(prevValue,elem,i,array){
  return prevValue * elem;
});
console.log(d);