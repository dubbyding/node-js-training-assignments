// perfrom your getCount task with reduce

var arr = [1, 2, 3, 4, 5, 6, 6 ,7 ,8 ,8 ,1 ,1 ,1];

var countRepeated = arr.reduce(
	function(acc, item, index, source){
		if(!acc.hasOwnProperty(item)){
			acc[item] = 1;
		}else{
			acc[item] = acc[item] + 1;
		}
		return acc;
	},
	{}
);

console.log("The Original Values are", arr);
console.log("The Repeated values are ", countRepeated);