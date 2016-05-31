/* 
Flatten a given array, eliminating nested arrays and empty [] elements. Do not alter the array, but return
a new array that retains the original order. Example: given [1, [2, 3], 4, []] return [1, 2, 3, 4]
*/

function flatten(arr){
	var arrNew = [];
	if(arr.length == 0){
		return false;
	}else{
		for(var i = 0; i < arr.length; i++){
			if(typeof arr[i] == "object"){
				var temp = arr[i];
				if(temp.length != 0){
					for(var j = 0; j< temp.length; j++){
						arrNew.push(temp[j]);
					}
				}
			}else{
				arrNew.push(arr[i]);
			}
		}
	}
	return arrNew;
}

console.log(flatten([1, [2, 3], 4, []]));