function balancePoint(arr){
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
		if(left == right){
			return true;
		}
	}
	return false;
}