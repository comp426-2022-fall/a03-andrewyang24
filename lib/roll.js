// Main file containing dice rolling functions

function roll(num_sides, num_dice, num_rolled) {
	let output = {
		"sides": num_sides,
		"dice": num_dice,
		"rolls": num_rolled,
		"results": new Array(num_rolled)
	};
	for (let i = 0; i < num_rolled; i++){
		var temp = 0;
		for(let j = 1; j < num_dice; j++){
			temp += Math.floor(Math.random() * num_sides) + 1;
		}
		results[i] = result;
	}
	return output;
}

export {roll};
