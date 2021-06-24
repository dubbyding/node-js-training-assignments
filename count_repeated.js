function repeatedCount(arr){
	let repCount = {};
	
	arr.forEach(
		function(item, index){
			if(!repCount.hasOwnProperty(item)){
				repCount[item] = 1;
			}else{
				repCount[item] = repCount[item] + 1;
			}	
		}
	);
	
	return repCount;	
}

var arr = [1, 2, 3, 4, 5, 6, 6 ,7 ,8 ,8 ,1 ,1 ,1];

var countOfRepeatedArray = repeatedCount(arr);

console.log("The Original Values are", arr);
console.log("The Repeated values are ", countOfRepeatedArray);