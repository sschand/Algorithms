/*
Combine two sorted arrays into a new sorted array containing the union set (i.e. remove duplicates)
Example: given [1, 2, 2, 7] and [2, 6, 6, 7] return [1, 2, 6, 7]
*/

function unionSortedArrays_dedupe(arr1, arr2){
	var newArr = [];

	for(var i = 0; i < arr1.length; i++){
		if(!newArr.includes(arr1[i])){
			newArr.push(arr1[i]);
		}
	}
  
    for(var j = 0; j < arr2.length; j++){
        if(!newArr.includes(arr2[j])){
			newArr.push(arr2[j]);
		}
    }
  
    for(var k = 0; k <= newArr.length - 1; k++){
        if(newArr[k] > newArr[k+1]){
            var temp = newArr[k];
            newArr[k] = newArr[k+1];
            newArr[k+1] = temp;
        }
    }
	return newArr;
}

console.log(unionSortedArrays_dedupe([1,2,2,7], [2,6,6,7]));