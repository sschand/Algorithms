function shuffle(arr){
	for(var i = 0; i < arr.length; i++){
		var r = Math.floor(Math.random() * (i + 1));
		var temp = arr[i];
		arr[i] = arr[r];
		arr[r] = temp;
	}
	return arr;
}