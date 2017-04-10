console.log("Fibonacci.js Loaded");

var endingVal = 500;

function fibItUp(endingVal) {
	var currentNum = 1;
	var prevNum = 0;
	var prevSecNum = 0;

	for (n=1; n<endingVal; ) {

	console.log(n);
	prevSecNum = prevNum;
	prevNum = n;
	n = prevSecNum + prevNum;
	}
}

fibItUp(endingVal);