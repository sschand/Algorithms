/*
Intersect two unsorted arrays, putting the unsorted multiset result "in-place" into the first. 
Given [2, 7, 2, 1] and [6, 7, 2, 7, 6, 2] you could change the first to [7, 2, 2]
*/


function intersectionUnsortedArrays(arr1, arr2){
	var returnArr = [];
	var indexes = [];

	for(var i = 0; i < arr1.length; i++){
		for(var j = 0; j < arr2.length; j++){
			if(arr1[i] == arr2[j]){
				if(!indexes.includes(j)){
					indexes.push(j);
					returnArr.push(arr1[i]);
					break;
				}
			}
		}
	}
	return returnArr;
}

console.log(intersectionUnsortedArrays([2, 7, 2, 1], [6, 7, 2, 7, 6, 2]));