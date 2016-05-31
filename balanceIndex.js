function balaceIndex(arr){
	for(var i = 0; i < arr.length; i++){
		var left = 0;
		var right = 0;
		for(var j = 0; j < arr.length; j++){
			if(j > i){
				right += arr[j];
			}else{
				left += arr[j];
			}
		}
	}
	for (var k = 0; k < arr.length; k++){
		if(k > i){
			if(left + arr[k] == right){
				return k;
			}
		}else{
			if(left - arr[k] == right){
				return l;
			}
		}
	}
	return false;
}