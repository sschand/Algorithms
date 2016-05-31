/************************************************************************************************************
BubbleSort: 
Pseudo: 

https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif
******************/
//JS:
function bubbleSort(arr){
	count = arr.length;

	while(count > 0){
		for(i = 0; i < count - 1; i++){
			if(arr[i] > arr[i + 1]){
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}
		count--;
	}
	
	return arr;
}

console.log(bubbleSort([6,3,4,2,9]));

/* PHP:
function bubbleSort($array){
	$count = count($array);

	while($count > 0){
		for($i = 0; $i < $count - 1; $i++){
			if($array[$i] > $array[$i + 1]){
				$temp = $array[$i];
				$array[$i] = $array[$i + 1];
				$array[$i + 1] = $temp;
			}
		}

		$count--;
	}
	return $array;
} */
