/************************************************************************************************************
Nth-Largest: Given an array, return the nth-largest element
[3,7,4,8,12],3 -> 7
*************************************************************************************************************/

function nLargest(arr,n){
	var max = arr[0];
	var notMax = arr[0];
	
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
		if(arr[i] < notMax){
			notMax = arr[i];
		}
	}
	
	while(n > 1){
		var notmax2 = notMax;		
		for(var j =0; j< arr.length; j++){
			if(max > arr[j] && notmax2 < arr[j]){
				notmax2 = arr[j];
			}
		}		
		max = notmax2;
		n--;
	}	
	console.log(max);
}

nLargest([3,6,1,4,7], 3);