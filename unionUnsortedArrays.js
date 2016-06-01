/*
Given the two unsorted arrays, return a new unsorted one with the union multiset, do not already the two original arrays. 
Given [2, 7, 2, 1] and [6, 7, 2, 7, 6, 2] return [7, 2, 7, 2, 1, 6, 6]


**********
*/

function unionUnsortedArrays(arr1, arr2){
	var newArr = [];
	var indexes = [];

	for(var i = 0; i < arr1.length; i++){
		newArr.push(arr1[i]);
	}

	for(var j = 0; j < arr2.length; j++){
		for(var x = 0; x < arr1.length; x++){
			if(arr1[x] == arr2[j]){
				if(!indexes.includes(x)){
					indexes.push(x);
					newArr.push(arr2[j]);
					break;
				}
			}
		}
	}
	return newArr;
}

console.log(unionUnsortedArrays([2, 7, 2, 1],[6, 7, 2, 7, 6, 2]));