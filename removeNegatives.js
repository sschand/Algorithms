************************************************************************************************************
RemoveNegatives: Implement a function removeNegatives() that accepts an array and removes any values that 
are less than zero. Optional: do this without two nested loops
************************************************************************************************************

Method 1:
/* Pseudo code
	initialize a variable that will count how many negative numbers you have aka times you'll have to do pop();
	loop through the array
	increment count if number is negative
	loop as many times as necessary to get all negatives to the right
	if the current value is negative, move it all the way to the right	
	pop count times
*/

function removeNegatives(arr){
	var countNeg = 0;  
	for(var j = 0; j < arr.length - 1; j++){		
		if(arr[j] < 0){
			countNeg++;
		}		
		for(var i = 0; i < arr.length - 1; i++){			
		  	if(arr[i] < 0){
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}	
		console.log(arr);	
	}
	while(countNeg > 0){
		arr.pop();
		countNeg--;
	}		
	return arr;	
}

****************

Method 2:
function removeNegatives(arr){
    for(var i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			var temp = arr[i];
			arr[i] = arr[arr.length - 1];
			arr[arr.length - 1] = temp;
			arr.pop();
			i--; //to check if last one is neg or not
			}					
		}	
	  return arr;	
}
console.log(removeNegatives([-1,2,-3,-4,5]));