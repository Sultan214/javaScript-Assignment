function oilPrice(dieselQuantity,petrolQuantity,octaneQuantity) {
	const perLtrDieselPrice = 114;
	const perLtrPetrolPrice = 130;
	const perLtrOctanePrice = 135;
	console.log("oil Price = ",perLtrDieselPrice, perLtrPetrolPrice, perLtrOctanePrice);

	let totalDiesel = dieselQuantity * perLtrDieselPrice;
	let totalPetrol = petrolQuantity * perLtrPetrolPrice;
	let totalOctane = octaneQuantity * perLtrOctanePrice;
	console.log("perquantityOil = ", totalDiesel, totalPetrol, totalOctane)
	
	const totalCost = totalPetrol + totalDiesel + totalOctane;
	return totalCost;


}
const totalCost = oilPrice(0, 2, 3);
console.log(totalCost);