module.exports = function(app){
var friends = 	[{
				name: "Ahmed",
				photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
				scores: ["5","1","4","4","5","1","2","5","4","1"]},
				{
				name: "Jacob Deming",
				photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
				scores: ["4","2","5","1","3","2","2","1","3","2"]},

				{
				name: "Jeremiah Scanlon",
				photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
				scores: ["5","2","2","2","4","1","3","2","5","5"]},
				{
				name: "Louis T. Delia",
				photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
				scores: ["3","3","4","2","2","1","3","2","2","3"]}]

app.get('/api/friends', function(req, res){
	// var everyone = req.params.friends;
	// console.log(everyone);
	res.json(friends);
});

app.post('/api/friends', function(req, res){
	var newPerson = req.body;
	// var newPerson = {
	// 			name: "David",
	// 			photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
	// 			scores: ["3","3","4","2","2","1","3","2","2","3"]}

	console.log(newPerson);

	
	var totalDiffArray = [];
	

	for (var i = 0; i < friends.length; i++) {
		var newFriends = friends[i];

		var newFriendScore = newFriends.scores
		var newPersonScore = newPerson.scores
		if (i == i) { 
	totalDiffArray.push(
					Math.abs(newFriendScore[0] - newPersonScore[0])
											+
					Math.abs(newFriendScore[1] - newPersonScore[1])
											+
					Math.abs(newFriendScore[2] - newPersonScore[2])
											+
					Math.abs(newFriendScore[3] - newPersonScore[3])
											+
					Math.abs(newFriendScore[4] - newPersonScore[4])
											+
					Math.abs(newFriendScore[5] - newPersonScore[5])
											+
					Math.abs(newFriendScore[6] - newPersonScore[6])
											+
					Math.abs(newFriendScore[7] - newPersonScore[7])
											+
					Math.abs(newFriendScore[8] - newPersonScore[8])
											+
					Math.abs(newFriendScore[9] - newPersonScore[9])
				);

		};


	};

totalDiffArray.min = function( totalDiffArray ){
    return Math.min.apply( Math, totalDiffArray );
};
var smallestDiff = totalDiffArray.min(totalDiffArray);

for (var a = 0; a < friends.length; a++) {
		var newFriends = friends[a];

		var newFriendScore = newFriends.scores
		var newPersonScore = newPerson.scores
		if (a == a) { 
					var result = (
					Math.abs(newFriendScore[0] - newPersonScore[0])
											+
					Math.abs(newFriendScore[1] - newPersonScore[1])
											+
					Math.abs(newFriendScore[2] - newPersonScore[2])
											+
					Math.abs(newFriendScore[3] - newPersonScore[3])
											+
					Math.abs(newFriendScore[4] - newPersonScore[4])
											+
					Math.abs(newFriendScore[5] - newPersonScore[5])
											+
					Math.abs(newFriendScore[6] - newPersonScore[6])
											+
					Math.abs(newFriendScore[7] - newPersonScore[7])
											+
					Math.abs(newFriendScore[8] - newPersonScore[8])
											+
					Math.abs(newFriendScore[9] - newPersonScore[9])
				);
					if (result == smallestDiff) {
						res.json(friends[a])
					};

		};


	};



	//take in the character from the post request
	//add it to the characters array
	friends.push(newPerson);
	
	// res.json(newPerson);
	  // res.send('POST request to the homepage');
	// res.redirect('/api/friends');
})
}