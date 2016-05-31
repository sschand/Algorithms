************************************************************************************************************
REMOVEAT: Given an array and an index into the array, remove and return the array value at that index. 
Do this without using any built-in array methods except pop().
************************************************************************************************************

Method 1:
function removeAt(arr, index){
	var temp = arr[index];
	for(var i = index; i < arr.length; i++){
		arr[i] = arr[i + 1];
	}
	arr[arr.length - 1] = temp;
	var removed = arr.pop();
	//return arr;
	return removed;
}

//console.log(removeAt([3,10,4,5], 2));