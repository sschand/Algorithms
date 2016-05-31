************************************************************************************************************
INSERTAT: Given an array, an index, and an additional value, insert the value into the array at the given 
index. Do this without using any built-in array functions.
************************************************************************************************************

Method 1:
function insertAt(arr, index, num){
	// Loop from the back of the array and move elements to the right, therefore increasing the size of the array by 1, stop when you get to the index where you want to add a new value

	for(var i = arr.length; i > index; i--){
  		arr[i] = arr[i - 1];
	}

	// at index, add your value

	arr[index] = num;
	return arr;
}

****************
Method 2:
function insertAt(arr, index, num){
	// Declare new array 

	var arrNew = [];

	// Loop through and put all values from old array to new array up until the index, stop at index

	for(var i = 0; i < index; i++){
		arrNew[i] = arr[i];
	}

	// At index, add the additional value number to the new array at the index specified

	arrNew[index] = num; 

	// Loop from that index to the end of the old array and add all elements after the index to the new array

	for(var i = index; i < arr.length; i++){
		arrNew[index + 1] = arr[i];

	// increment the index of the new array

		index++;
	}  
	return arrNew;
}

//console.log(insertAt([3,10,4,5], 2, 30));