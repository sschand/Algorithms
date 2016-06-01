/*
Combine two already-sorted arrays into an array containing the sorted multiset intersection of the two.
Example: Given [1, 2, 2, 7] and [2, 6, 6, 7] return [2, 7]
*/


function intersectSortedArrays(arr1, arr2){
	var returnArr = [];
	var indexes = [];

	for(var i = 0; i < arr1.length; i++){
		for(var j = 0; j < arr2.length; j++){
			if(arr1[i] == arr2[j]){
				if(!indexes.includes(j)){
					indexes.push(j);
					returnArr.push(arr1[i]);
				}
			}
		}
	}
	return returnArr;
}


console.log(intersectSortedArrays([1,2,2,7], [2,6,6,7]));