/*
Create a function that, given a string of words (with spaces, tabes, and linefeeds), returns an array of words.
Example: given "Life is not a drill!" return ["Life", "is", "not", "a", "drill!"]
*/

function stringToWordArray(str){
	if(typeof str !== "string"){
		return [];
	}

	var wordArr = [];
	word = "";

	for(var i = 0; i < str.length; i++){
		if(str[i] == " " || str[i] == "\t" || str[i] == "\n"){
			if(word.length){
				wordArr.push(word);
				word = "";
			}
		} else {
			word += str[i];
		}
	}

	if(word.length){
		wordArr.push(word);
	}

	return wordArr;
}


console.log(stringToWordArray("Life is not a drill!"));