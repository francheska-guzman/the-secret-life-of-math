/*
Francheska Guzman 
CodeBridge Cycle 2 Cohort 4
March 11, 2017
*/
var myNumbers = document.getElementById("myNum");
var myArray = myNumbers.split(" ");
var sum;

function average() {
for (var i = 0; i < myArray.length; i++) {
	sum = sum + myArray[i];
	}
	document.getElementById("output").innerHTML = (sum/myArray.length);
};