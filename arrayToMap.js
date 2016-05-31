/************************************************************************************************************
Arr2Map: Given two arrays, create an associative array (map) containing keys of the first, and values of the 
second. For arr1 = ['abc', 3, 'yo'] and arr2 = [42,'wassup',true] you should return 
{'abc' : 42, 3: 'wassup', 'yo': true}
*************************************************************************************************************/

function arr2Map(arr1, arr2){
	var obj = {};
	for(var i = 0; i < arr1.length; i++){
		obj[arr1[i]] = arr2[i];
	}
	
	return obj;
}

console.log(arr2Map(['abc', 3, 'yo'],[42,'wassup',true]));
