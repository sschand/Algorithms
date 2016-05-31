/************************************************************************************************************
Second-Largest: Given an array, return the second-largest element
[3,7,4,8,12] -> 8
************************************************************************************************************/

//Method 1:

function secondLargest(arr){
	var max = arr[0];
	var max2 = arr[0];
	
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];			
		}
		
		if(arr[i] < notMax){
			max2 = arr[i];
		}
	}
	
	for(var j = 0; j < arr.length; j++){
		if(max > arr[j] && max2 < arr[j]){
			max2 = arr[j];
		} 
	}
	console.log(max2);
	return max2;
}


console.log(secondLargest([3,7,4,8,12]));