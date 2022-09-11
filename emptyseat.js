function publicBusFare(passengers) {
	let Buses = passengers / 50;

	passengers = passengers % 50; // it Store the remaining passengers

	let microBuses = passengers / 11;

	const remainingPassengers = passengers % 11;
	//it store remaining people ,thry r gonna via public bus
	return remainingPassengers * 250;
}

const totalFare = publicBusFare(235);
console.log(totalFare);