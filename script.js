// Calculate the average.

function average () {
	var stringNumbers = Calculator.input.value;
	// Change a string of numbers, spaces and commas, into an array of separated numbers.
	var arrayNumbers = stringNumbers.split(", ");
	var count = arrayNumbers.length;
	var sum = 0;
			for (var i = 0; i < count; i++) {
				sum = sum + Number(arrayNumbers[i]);
			}
			return sum/count;
};