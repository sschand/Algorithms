/*
Remove Duplicates: remove duplicates from an array. Do not alter the original array; return a new one. keeping 
results 'stable' (retain original order). Given [1, 2, 1, 3, 4, 2] return a new array [1, 2, 3, 4]
*/

function removeDups(arr){
	var newArr = [];
	if(arr.length === 0){
		return false;
	}else{
		for (var i = 0; i < arr.length; i++){
			var exists = false;
			var j = 0;
			while(j < newArr[j]){
				if(arr[i] == newArr[j]){
					exists = true;
					break;
				}
				j++;
			}
			if(!exists){
				newArr.push(arr[i]);
			}
		}
	}
	return newArr;
}

console.log(removeDups([1, 2, 1, 3, 4, 2]));