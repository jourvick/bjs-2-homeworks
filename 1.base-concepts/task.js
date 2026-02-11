"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - (4 * a * c);
	let result;

	if (d < 0) {

	} else if (d === 0) {
		result = -b / (2 * a);
		arr.push(result);
	} else {
		result = (-b + Math.sqrt(d)) / (2 * a);
		let secondResult = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(result, secondResult);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / 100 / 12;
	let creditBody = amount - contribution;
	let monthlyPayment = creditBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	let allPayment = monthlyPayment * countMonths;
	let roundedAllPayment = Math.round(allPayment * 100) / 100;

	return roundedAllPayment;
}