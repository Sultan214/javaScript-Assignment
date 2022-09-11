//-------------Problem:1 radianToDegree-------------------------

function radianToDegree(radians)
{
  const pi = Math.PI;
  const rad = radians * (180/pi);  // the formula of radian to Degree
  return rad.toFixed(2);
}
          
let result = radianToDegree(10);
console.log(result);





//-----------Problem:2  isJavaScriptFile -------------------------

function isJavaScriptFile(extensionName){
	var ext = extensionName.substr(extensionName.lastIndexOf('.') + 1);
	if (ext === 'js') {
		return true;
	} else if (ext !== 'js')
		return false;
	
	}
 
 const result =isJavaScriptFile("app.js")
console.log(result);
 

//-------------------Problem 3: oilPrice  --------------------

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


//------------  Problem 4: publicBusFare----------------

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



//----------Problem 5: isBestFriend ------------------

let friend1 = { name: "Jubair", Friend: "Rabiul" }
let friend2 = { name: "Rabiul", Friend: "Jubair" }
function isBestFriend(friends) {
	if (friend1.Friend == friend2.name && friend2.Friend == friend1.name) {
		return true;
	}
	else {
		return false;
	}
}

const friends = isBestFriend(friend1, friend2)
console.log(friends);
