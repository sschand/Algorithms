/************************************************************************************************************
ArrayConcat: Replicate the array concat() function built into JS. Create a standalone function that accepsts
two arrays. Return a new array containing the first array's elements, followed by the second array's elements.
[3,7,4,8,12],3 -> 7
************************************************************************************************************/

function arrConcat(arr1, arr2){
	var arrNew = [];
	
	for(var i = 0; i < arr1.length; i++){
		arrNew.push(arr1[i]);
	}
	
	for(var i = 0; i < arr2.length; i++){
		arrNew.push(arr2[i]);
	}
	return arrNew;
}

console.log(arrConcat([1,2,5], [5,2,5]));
