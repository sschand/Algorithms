************************************************************************************************************
BST search: Given and array and value to look for, traverse through the tree by searching either the first 
or second half of the array. Break down the array into halves every time. Return true if the value is in 
that array. 
bst([1,2,3,4,5,6,7], 5)
************************************************************************************************************

Method 1:
/* Pseudo code
	Set 3 variables: m - middle index of array, a - first index of the array, z - last index of the array
	Do this iteration n number of times

*/

Method 1:
/*	Pseudo:
 	set variable a - first index
	set variable z - last index
	set variable m - mid index
	
	while a is less than z do
	
	check if array at mid OR if a[z] if a[a] is the value you're looking for 
	if it the value return true and end 
	
	otherwise check if the number is less than the current value at mid index
	  if so, then change z to be m-1
		and m to be (z-a)/2
		
		repeat
		
	otherwise check if the number is more than the current value at mid index
	  if so, then change a to be m+1
		and m to be (z+a)/2
		
		repeat 
		
	else return true
	
	out of while loop 
	return false
*/	

function bst_search(arr, n){
	var a = 0;
	var z = arr.length - 1;
	var m = Math.floor(arr.length/2);

	while (a < z){
		if(n == arr[m] || n == arr[a] || n == arr[z]){
			return true;
		}else if(n < arr[m]){
			z = m - 1;
			m = Math.floor((z - a)/2);
		}else if(n > arr[m]){
			z = m + 1;
			m = Math.floor((z + a)/2);
		}				
	}	
	return false;
}

console.log(bst_search([1,2,3,4,5,6,7], -3));
