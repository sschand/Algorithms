/*************************************************************************************************************
RotateArray: Given an array and a number (which is the amount of time you want to rotate the function to 
the right to), return the array after the rotation. The last value will go to the first position, etc.
RotateArray([1,2,3,4], 2)  => [3,4,1,2] **********************************************************************/


//Method 1:
/* Pseudo:
 	1. Put last element into a temp variable since this will go to the first position after all the shifts to the right are done
	2. Starting at the last position, move the left of its value to the current position and keep doing this until you have 	   reached the beginning of the array
	3. At the end place the temp value into the first position		
	4. Repeat 1-3 as many times as stated by the n
	5. Return array
*/

function rotateArray(arr, n){
	while (n > 0){
	var temp = arr[arr.length - 1];

		for(i = arr.length - 1; i > 0; i--){
			arr[i] = arr[i - 1];			
		}

		arr[0] = temp;
		n--;
	}
	return arr;	
}

console.log(rotateArray([1,2,3,4], 3));