/*
Create a function that given a string of words with spaces, returns a string with words in the reverse order. 
Given "This is a test" returns "test a is This"
*/

function reverseWordOrder(str){
	if(typeof str !== "string"){
		return "";
	}

	var words = stringToWordArray(str);

	for(var i = 0; i <= (words.length/2) -1; i++){
		var temp = words[i];
		words[i] = words[words.length -i - 1];
		words[words.length -i - 1] = temp;
	}

	return words.join(" ");
}

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


console.log(reverseWordOrder("This is a test"));