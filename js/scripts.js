//https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

//arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
//arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
//arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

function arrayOfMultiples (number, length1) {
	return Array.from({length: length1}, (value, index) => (index+1)*number);
}

var number=prompt("Enter number for multiples:");
var length1=prompt("Enter length until you want multiples:");
console.log("Multiples "+arrayOfMultiples(number,length1)); //prints array of multiples
