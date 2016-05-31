************************************************************************************************************
REVERSEARRAY: Given a numerical array, reverse the order of the values. The reversed array should have the 
same length, with the existing elements moved to other indices so that the order of elements is reversed. 
*cannot use a new array, must use the same array
************************************************************************************************************

Method 1:
/* Pseudo code
	Starting at both sides of the array, go through and switch the values;
	Do the previous 1/2 as times as the length of the array
	as you increment i index from the left side, decrement j index
*/

function revArr(arr){
	  var mid = arr.length /2;
	  var j = arr.length - 1;
	
	  for(var i = 0; i < mid; i++){
			  var temp = arr[j];
			  arr[j] = arr[i];
			  arr[i] = temp;
			  j--;
		}
	  return arr;
	
}

console.log(revArr([1,2,3,4,5,6]));