// const friend = [
// 	 { name: "Taylorr", Friend: "John" },
// 	{ name: "Johny", Friend: "Toylorjnh" }
	
// ]

// function isBestFriend(friend) {
// 	for (let i = 0; i < friend.length; i++){
// 		console.log(friend[i]);
// 	}
// 	if (friend[0].name === friend[1].Friend) {
// 		return true;
// 	}
// 	else if(friend.name !== friend.Friend) { return false; }
// }

// const myBf = isBestFriend(friend);
// console.log(myBf)



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