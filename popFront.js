************************************************************************************************************
POPFRONT: Given an array, remove and return the value at the beginning of the array. Do this without using 
any built-in array methods except pop().
************************************************************************************************************

Method 1:
function popFront(arr){
	var arrRev = [];
	var x = 0;
	for (var i = arr.length - 1; i >= 0; i--){
		arrRev[x] = arr[i];
		x++;
	}
	var temp = arrRev.pop();
	return temp;
}

****************
Method 2:
function popFront(arr){
	var temp = arr[0];
	for (var i = arr.length - 1; i > 0; i--){
		arr[i - 1] = arr[i];
	}
	return temp;
}

console.log(popFront([2,4,6,s7]));