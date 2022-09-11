const friends = [
	{ name: "Jubair", Friend: "Rabiul" },
	{ name: "Rabiull", Friend: "Jubair" }
	  ]
	function isBestFriend(friends) {
		if (friends.Friend == friends.name && friends.Friend == friends.name) {
			return true;
		}
		else {
			return false;
		}
	}
	
	const Bfriends = isBestFriend(friends)
	console.log(Bfriends);