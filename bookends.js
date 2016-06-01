/*
Bookends: Given [1,2,3,5,6,11] return ["1-3", "5-6", 11]
*/

function bookEnds(arr){
	var str = "";
	var start = 0;
	var count = 1;
	var end = 0;

	for(var i = start; i < arr.length; i++){
		if(arr[i]+1 != arr[i + 1]){
			end = i;
			str += arr[start] + '-' + arr[end];
			arr[end] = str;
			start++;
			count = 1;

			for(var j = 0; j < count; j++){
				if(typeof arr[j] == "string"){
					var temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
					arr.shift();
				}
			}

		}else{
			count++;
		}
	}

	for(var k = 0; k < arr.length; k++){
		if(!arr[k].contains("-")){
			parseInt(arr[k]);
		}
	}
	return arr;
}


console.log(bookEnds([1,2,3,5,6,11]));