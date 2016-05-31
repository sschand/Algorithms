/************************************************************************************************************
Selection Sort: divides the input list into two parts: the sub-list of items already sorted, which is built up 
from left to right at the front (left) of the list, and the sub-list of items remaining to be sorted that 
occupy the rest of the list. Initially, the sorted sub-list is empty and the unsorted sub-list is the entire 
input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in 
the unsorted sub-list, exchanging it with the leftmost unsorted element (putting it in sorted order), and moving the
sub-list boundaries one element to the right.
https://vimeo.com/76380380
https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif
****************/

//Method 1:
/* Pseudo: 
	1. declare counter variable that you'll loop through
	2. loop through the array until the end of the array, increment once at the end of the iteration
	3. declare new variables to hold current index and current index value
	4. loop through the rest of the array until you find a number less than current number
		5. if you find such number, reset the min value to this new value and reset the minIndex to this index
	6. after you find the min from the rest of the array, swap the current value with that new min value
	7. swap with temp variable
	8. increment count and repeet 2-8 as necessary
	9. return array;
*/

// JS:
function selectionSort(arr){
    var x = 0;
	
    while(x < arr.length){
    	var min = arr[x];
    	var minIndex = x;

    	for(var i = x + 1; i < arr.length; i++){    		
    		if(arr[i] < min){
    			min = arr[i];
    			minIndex = i;    			
    		}
    	}

    	var temp = arr[x];
    	arr[x] = arr[minIndex];
    	arr[minIndex] = temp;

    	x++;
    }
    return arr;
}

console.log(selectionSort([6,2,10,5]));
/*
PHP:
function selectionSort($array){
	$x = 0;

	while($x < count($array)){
		$min = $array[$x];
		$minIndex = $x;

		for($i = $x + 1; $i < count($array); $i++){
			if($array[$i] < $min){
				$min = $array[$i];
				$minIndex = $i;
			}
		}

		$temp = $array[$x];
		$array[$x] = $array[$minIndex];
		$array[$minIndex] = $temp;

		$x++;
	}
	return $array;
}

echo "<pre>";
print_r(selectionSort([6,2,10,5]));
echo "</pre>";
*/