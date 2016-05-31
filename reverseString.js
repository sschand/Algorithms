/************************************************************************************************************
ReverseString: Implement a function reverseString(str) that, given a string, will return the string of the 
same length but with characters reversed. Example: given 'creature', return 'erutaerc' Do not use the 
build=in reverse() function
*************************************************************************************************************/

function reverseString(str){
  var arr = str.split('');
	
	console.log(arr);
	for(var i = 0; i < str.length/2; i++){
		var temp = arr[i];
		arr[i] = arr[arr.length -1 -i];
		arr[arr.length -1 -i] = temp;
	}
	return arr.join("");
}

console.log(reverseString('creature'));