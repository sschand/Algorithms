************************************************************************************************************
PUSHFRONT: Given an array and an additional value, insert this value at the beginning of the array. Do this 
without using any built-in array methods.
************************************************************************************************************

Method 1:
function pushFront(arr, num){
	var arrNew = [];
	arrNew[0] = num;
	for (var i = 0; i < arr.length; i++){
		arrNew[i + 1] = arr[i];
	}
	return arrNew;
}

****************
Method 2:
function pushFront(arr, num){
	for (var i = arr.length; i > 0; i--){
		arr[i] = arr[i - 1];
	}
	arr[0] =num;
	return arr;
}

console.log(pushFront1([2,4,6,7],9));