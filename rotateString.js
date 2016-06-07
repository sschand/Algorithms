/*
Rotate a string right given the integer amount of times to rotate 
Given "Dessert" and 3, return "ertDess"
*/

function rotateString(str, rotBy){
	if(typeof str !== "string"){
		return "";
	}

	if(!str.length){
		return str;
	}

	if(!rotBy % str.length){
		return str;
	}

	while(rotBy >0){
		rotBy -= str.length;
	}

	var i;
	newStr = "";

	for(i = str.length; i < str.length * 2; i++){
		var shifInd = (i - rotBy)% str.length;
		newStr += str[shifInd];
	}

	return newStr;
}

console.log(rotateString("Dessert", 3));