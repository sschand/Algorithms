/******************************************************************************************************
Second-to-Last: Given an array, return the second-to-last-element
[3,7,4,8,12] => 8
******************************************************************************************************/

//Method 1:
function secondToLast(arr){
	if(arr.length < 2){
	  	return false;
	}else{
	  	return arr[arr.length -2];
	}	
}

console.log(secondToLast([3,7,4,8,12]));
