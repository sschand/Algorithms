/************************************************************************************************************
BookIndex: given [1,3,4,5,7,8,10] return "1,3-5,7-8,10"
**********************************************************************************************************/

function bookIndex(arr){
	var str = '';
	var i = 0;
	while(i < arr.length){
		for(var j = i; j < arr.length; j++){
			if(arr[j] + 1 != arr[j + 1]){
				if(arr[i] != arr[j]){
					str += arr[i] + '-' + arr[j] + ',';
					i = j+1;
					break;
				}else if(arr[i] == arr[j]){
					str += arr[i] + ',';
					i = j+1;
					break;
				}
			}
		}
	}
	var endStr = str.slice(0, str.length - 1);
	return endStr;
}

console.log(bookIndex([1,3,4,5,7,8,10]));
