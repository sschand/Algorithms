/******************************************************************************************************
Nth-to-Last: Given an array return the element that is N-from-array's end
[3,7,4,8,12], 3 => 7
******************************************************************************************************/

//Method 1:
function nToLast(arr,n){
	  if(n < 0 || n >= arr.length){
			  return false;
		}else{
			  return arr[arr.length - n - 1];
		}	
}

console.log(nToLast([3,7,4,8,12], 3));